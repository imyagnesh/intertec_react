import { takeLatest, all, fork, delay, call, put } from "redux-saga/effects";
import * as types from "../constants/actionTypes";

function* fetchProduct() {
  try {
    yield delay(3000);
    const res = yield call(fetch, "http://localhost:3004/products");
    const products = yield res.json();
    yield put({
      type: `${types.FETCH_PRODUCTS}_${types.SUCCESS}`,
      payload: products
    });
  } catch (error) {
    yield put({
      type: `${types.FETCH_PRODUCTS}_${types.ERROR}`,
      payload: error
    });
  }
}

function* createProduct({ payload, meta }) {
  const { id } = payload;
  const { resetForm, setStatus, setSubmitting } = meta;
  try {
    let url = "http://localhost:3004/products";
    if (id) {
      url = `${url}/${id}`;
    }
    const res = yield call(fetch, url, {
      method: id ? "PUT" : "POST",
      body: JSON.stringify(payload),
      headers: {
        accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    const product = yield res.json();
    if (id) {
      yield put({ type: "EDIT_PRODUCT_SUCCESS", payload: product });
    } else {
      yield put({
        type: `${types.CREATE_PRODUCT}_${types.SUCCESS}`,
        payload: product
      });
    }
    yield call(resetForm);
  } catch (error) {
    yield call(setStatus, { serverError: error.message });
    if (id) {
      yield put({ type: "EDIT_PRODUCT_ERROR", payload: error });
    } else {
      yield put({
        type: `${types.CREATE_PRODUCT}_${types.ERROR}`,
        payload: error
      });
    }
  } finally {
    yield call(setSubmitting, false);
  }
}

function* deleteProduct({ payload }) {
  try {
    console.warn("payload", payload);
    yield call(fetch, `http://localhost:3004/products/${payload}`, {
      method: "DELETE"
    });
    yield put({ type: `${types.DELETE_PRODUCT}_${types.SUCCESS}`, payload });
  } catch (error) {
    yield put({
      type: `${types.DELETE_PRODUCT}_${types.ERROR}`,
      payload: error
    });
  }
}

function* fetchProductsRequest() {
  yield takeLatest(`${types.FETCH_PRODUCTS}_${types.REQUEST}`, fetchProduct);
}

function* createProductRequest() {
  yield takeLatest(`${types.CREATE_PRODUCT}_${types.REQUEST}`, createProduct);
}

function* deleteProductRequest() {
  yield takeLatest(`${types.DELETE_PRODUCT}_${types.REQUEST}`, deleteProduct);
}

export default function* rootProductsSaga() {
  yield all([
    fork(fetchProductsRequest),
    fork(createProductRequest),
    fork(deleteProductRequest)
  ]);
}
