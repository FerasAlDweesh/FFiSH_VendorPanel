import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { observer } from "mobx-react";

//Store
import authStore from "./stores/authStore";
import vendorStore from "./stores/VendorStore";

//Component
import Login from "./Component/Login";
import CardForm from "./Component/CardForm/CardForm";

function App() {
  const getView = () => {
    return (
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login" component={Login} />
        <Route path="/cardform" component={CardForm} />
      </Switch>
    );
  };

  return <>{getView()}</>;
}

export default withRouter(observer(App));
