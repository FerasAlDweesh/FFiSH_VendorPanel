import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { observer } from "mobx-react";

//Store
import authStore from "../../stores/authStore";

//Component
import Logout from "../Logout";
import Dashboard from "./dashboard";
import Navbar from "../navigation/Navbar";

const Home = () => {
  if (!authStore.user) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <Dashboard />
    </div>
  );
};

export default observer(Home);
