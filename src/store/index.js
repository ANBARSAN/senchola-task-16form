// Redux Configuration -- @react-toolkit
// Using Middle ware Redux-saga

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import watcherSaga from "./rootSaga";
import { reducer } from "./rootSlice";
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      immutableCheck: false,
      serializableCheck: false,
    }).concat(sagaMiddleware),
});
sagaMiddleware.run(watcherSaga);
