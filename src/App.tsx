import React from "react";
import "./translations/i18n";
import AppRoute from "./AppRoute";
import { Router } from "react-router-dom";
import history from "./history";
import { Provider } from "react-redux";
import store from "./reducers";

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router history={history}>
          <AppRoute />
        </Router>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
