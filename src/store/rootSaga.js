// Takes latest updated datas to backend

import { takeLatest, all } from "redux-saga/effects";
import { handleGetUser } from "./handler";
import { finalForm, formPage1, formPage2 } from "./rootSlice";

function* watcherSaga1() {
  yield takeLatest(formPage1, handleGetUser);
}
function* watcherSaga2() {
  yield takeLatest(formPage2, handleGetUser);
}
function* watcherSaga3() {
  yield takeLatest(finalForm, handleGetUser);
}
export default function* watcherSaga() {
  yield all([watcherSaga1(), watcherSaga2(), watcherSaga3()]);
}
