import React from "react";
import ReactDOM from "react-dom";
import { builder } from "@builder.io/react";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./fonts/FiraCode.ttf";

builder.init("0c2a3afc6f154cd2a253d408689d4fb2");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
