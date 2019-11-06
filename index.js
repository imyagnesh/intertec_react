import React from "react";
import ReactDOM from "react-dom";
import { registerObserver } from "react-perf-devtool";
import App from "./src/app";
import ErrorBoundary from "./src/components/ErrorBoundary";

function callback(measures) {}

registerObserver({}, callback);

ReactDOM.render(
  <ErrorBoundary>
    <App name="yagnesh" />
  </ErrorBoundary>,
  document.getElementById("root")
);
