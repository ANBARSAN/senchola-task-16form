import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./store";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import "./assets/scss/main.scss";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


reportWebVitals();
