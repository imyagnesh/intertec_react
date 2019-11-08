import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { registerObserver } from "react-perf-devtool";
import App from "./src/app";
import ErrorBoundary from "./src/components/ErrorBoundary";
import LocaleContext from "./src/context/localeContext";
import store from "./src/configureStore";

function callback(measures) {}

registerObserver({}, callback);

ReactDOM.render(
  <Provider store={store}>
    <LocaleContext>
      <ErrorBoundary>
        <App name="yagnesh" />
      </ErrorBoundary>
    </LocaleContext>
  </Provider>,
  document.getElementById("root")
);
