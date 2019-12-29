import React, { Component } from "react";
import { observer } from "mobx-react";
import Spinner from "./Spinner";

//stores
import userStore from "../../stores/userStore";
import vendorStore from "../../stores/VendorStore";
import authStore from "../../stores/authStore";
import instance from "../../stores/instance";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

class Dashboard extends Component {
  state = {
    tableData: {
      first_name: "",
      last_name: "",
      username: ""
    }
  };

  componentDidMount = async () => {
    await userStore.fetchAllUsers();
    console.log("HELLOOO");
  };

  render() {
    if (userStore.loading) {
      return <Spinner />;
    }
    let usersList = userStore.users.map(user => {
      return (
        <tr>
          <th scope="row">user.id</th>
          <td>user.first_name</td>
          <td>user.last_name</td>
          <td>user.username</td>
          <td>10-12-2019</td>
        </tr>
      );
    });

    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Username</th>
            <th scope="col">Date Joined</th>
          </tr>
        </thead>
        <tbody>{usersList}</tbody>
      </table>
    );
  }
}

export default observer(Dashboard);
