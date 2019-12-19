import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { observer } from "mobx-react";

//Store
import authStore from "./Stores/authStore";

//Component
import Login from "./Component/Login";

function App() {
  const getView = () => {
    return (
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login" component={Login} />
      </Switch>
    );
  };

  return <>{getView()}</>;
}

export default withRouter(observer(App));
