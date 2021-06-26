import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorkerRegistration from "./workers/serviceWorkerRegistration";
import "./assets/styles/main.scss";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorkerRegistration.register();
