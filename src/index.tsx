import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducer from "./logic/reducers/index";
import Layout from "./Layout";

// create our redux store

// this is for the chrome plugin debugger.  If we are in Production dont attach this!
let store: any;
if (process.env.NODE_ENV === "production") {
  store = createStore(reducer, applyMiddleware(thunk));
} else {
  console.log("Dev MODE");
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
}

const app = document.getElementById("app");
// inject our react objects into the app container on the HTML page.
ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  app
);
