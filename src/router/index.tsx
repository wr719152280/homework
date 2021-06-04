import React, { FC } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Dashboard from "../view/dashboard";
import Agent from "../view/agent";
import Help from "../view/help";
import MyCruise from "../view/myCruise";
import Side from "../components/side";

const Router: FC = (props) => {
  return (
    <BrowserRouter>
      <section className="main content">
        <Side />
        <main className="main-container">
          <Switch>
            <Route path="/dashboard" component={Dashboard}></Route>
            <Route path="/agent" component={Agent}></Route>
            <Route path="/help" component={Help}></Route>
            <Route path="/my-cruise" component={MyCruise}></Route>
          </Switch>
        </main>
      </section>
    </BrowserRouter>
  );
};

export default Router;
