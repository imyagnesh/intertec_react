import React from "react";
import ReactDOM from "react-dom";
import { registerObserver } from "react-perf-devtool";
import App from "./src/app";
import ErrorBoundary from "./src/components/ErrorBoundary";
import LocaleContext from "./src/context/localeContext";

function callback(measures) {}

registerObserver({}, callback);

ReactDOM.render(
  <LocaleContext>
    <ErrorBoundary>
      <App name="yagnesh" />
    </ErrorBoundary>
  </LocaleContext>,
  document.getElementById("root")
);
