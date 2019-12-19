import React, { Component } from "react";

import { observer } from "mobx-react";

import authStore from "../../Stores/authStore";

const Logout = () => {
  return (
    <button classNmae="btn btn-danger" OnClick={authStore.logout}>
      Logout {authStore.user.username}
    </button>
  );
};

export default observer(Logout);
