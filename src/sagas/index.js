import { all, fork } from "redux-saga/effects";
import products from "./productsSaga";

export default function* rootSaga() {
  yield all([fork(products)]);
}
