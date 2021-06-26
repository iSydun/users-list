import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import AppLayout from "./AppLayout";
import PageNotFound from "./components/page_not_found/PageNotFound";
import UsersList from "./components/users_list/UsersList";

const AppRoute = () => {
  return (
    <Switch>
      <Route path="/:page">
        <AppLayout>
          <Switch>
            <Route exact path="/users" component={UsersList} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </AppLayout>
      </Route>
      <Route path="*">
        <Redirect to="/users" />
      </Route>
    </Switch>
  );
};

export default AppRoute;
