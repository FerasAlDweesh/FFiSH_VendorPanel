import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { observer } from "mobx-react";

import authStore from "../../stores/authStore";

const Logout = props => {
  return (
    <button
      className="btn btn-danger"
      onClick={() => authStore.logout(props.history)}
    >
      Logout {authStore.user.username}
    </button>
  );
};

export default withRouter(observer(Logout));
