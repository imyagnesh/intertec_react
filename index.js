import React from "react";
import ReactDOM from "react-dom";
import { registerObserver } from "react-perf-devtool";
import App from "./src/app";

function callback(measures) {}

registerObserver({}, callback);

ReactDOM.render(<App name="yagnesh" />, document.getElementById("root"));
