import React from "react";
import { Switch, Route } from "react-router-dom";
import AppContainer from "./AppContainer";
import Users from "./components/users/Users";

const AppRoute = () => {
  return (
    <Switch>
      <Route path="/">
        <AppContainer>
          <Route exact path="/users" component={Users} />
        </AppContainer>
      </Route>
    </Switch>
  );
};

export default AppRoute;
