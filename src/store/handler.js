
// Action handlers for redux - generator functions

import { delay, call, put, select } from "redux-saga/effects";
import {
  setFormStage,
  setDbRefNo,
  setFormPage1,
  setFormPage2,
  setFinalForm,
} from "./rootSlice";
import { requestGetUser } from "./request";

export function* handleGetUser(action) {
  // const dataFromStore = yield select((data) => data); For accessing db collections
  let formNumber = yield select((data) => data.FormStage);
  formNumber = Number(formNumber) - 1;
  try {
    const response = yield call(requestGetUser, action);
    let { data } = response;
    console.log(data);
    yield put(setDbRefNo(data)); // Storing Reference/Collection Number to store
  } catch (err) {
    console.error(err.error);
    yield put(setFormStage(formNumber));
    formNumber === 1
      ? yield put(setFormPage1(""))
      : formNumber === 2
      ? yield put(setFormPage2(""))
      : yield put(setFinalForm(""));
    yield delay(2000);

    alert(err);
  }
}
