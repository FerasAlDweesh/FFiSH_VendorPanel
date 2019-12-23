import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { observer } from "mobx-react";

//Component
import Login from "./Component/Login";
import Home from "./Component/Home";

function App() {
  const getView = () => {
    return (
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    );
  };

  return <>{getView()}</>;
}

export default withRouter(observer(App));
