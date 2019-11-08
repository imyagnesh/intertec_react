import { takeLatest, all, fork, delay, call, put } from "redux-saga/effects";

function* fetchProduct() {
  try {
    const res = yield call(fetch, "http://localhost:3004/products");
    const products = yield res.json();
    yield put({ type: "FETCH_PRODUCTS_SUCCESS", payload: products });
  } catch (error) {
    yield put({ type: "FETCH_PRODUCTS_ERROR", payload: error });
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
      yield put({ type: "CREATE_PRODUCT_SUCCESS", payload: product });
    }
    yield call(resetForm);
  } catch (error) {
    yield call(setStatus, { serverError: error.message });
    if (id) {
      yield put({ type: "EDIT_PRODUCT_ERROR", payload: error });
    } else {
      yield put({ type: "CREATE_PRODUCT_ERROR", payload: error });
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
    yield put({ type: "DELETE_PRODUCTS_SUCCESS", payload });
  } catch (error) {
    yield put({ type: "DELETE_PRODUCTS_ERROR", payload: error });
  }
}

function* fetchProductsRequest() {
  yield takeLatest("FETCH_PRODUCTS_REQUEST", fetchProduct);
}

function* createProductRequest() {
  yield takeLatest("CREATE_PRODUCT_REQUEST", createProduct);
}

function* deleteProductRequest() {
  yield takeLatest("DELETE_PRODUCT_REQUEST", deleteProduct);
}

export default function* rootProductsSaga() {
  yield all([
    fork(fetchProductsRequest),
    fork(createProductRequest),
    fork(deleteProductRequest)
  ]);
}
