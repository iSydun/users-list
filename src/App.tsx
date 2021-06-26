import React from "react";
import "./translations/i18n";
import AppRoute from "./AppRoute";
import { Router } from "react-router-dom";
import history from "./history";

const App = () => {
  return (
    <Router history={history}>
      <AppRoute />
    </Router>
  );
};

export default App;
