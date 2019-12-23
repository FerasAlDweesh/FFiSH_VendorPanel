import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { observer } from "mobx-react";

//Store
import authStore from "../../Stores/authStore";

//Component
import Logout from "../Logout";

const Home = () => {
  if (!authStore.user) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      {/* <img src={logo} className="logo" alt="the index logo" /> */}
      <section>
        <h4 className="menu-item active">
          <NavLink to="/home">Home</NavLink>
        </h4>
        <h4 className="menu-item">
          <NavLink to="/cardform">Create A Card</NavLink>
        </h4>
        <Logout />
      </section>
    </div>
  );
};

export default observer(Home);
