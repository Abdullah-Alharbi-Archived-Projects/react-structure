import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import reduxSagaMiddleware from "redux-saga";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

const sagaMiddleware = reduxSagaMiddleware();
// TODO: compine reducers
const store = createStore((state = {}, action) => {},
applyMiddleware(sagaMiddleware));

// TODO: sagas goes here
// sagaMiddleware.run();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
