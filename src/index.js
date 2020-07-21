import React from "react";
import createSagaMiddleware from "redux-saga";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import reducer from "./_store/news/reducer";
import saga from "./_store/news/effects";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
