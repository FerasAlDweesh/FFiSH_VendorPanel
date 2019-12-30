import React, { Component } from "react";
import { observer } from "mobx-react";
import Spinner from "./Spinner";

//stores
import cardStore from "../../stores/cardStore";
import vendorStore from "../../stores/VendorStore";
import authStore from "../../stores/authStore";

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
    await cardStore.fetchAllCards();
    console.log("HELLOOO");
  };

  render() {
    if (cardStore.loading) {
      return <Spinner />;
    }
    let usersList = cardStore.cards.map(card => {
      console.log("CARD", card);
      return (
        <tr>
          <th scope="row">{card.user.id}</th>
          <td>{card.user.username}</td>
          <td>{card.user.first_name}</td>
          <td>{card.user.last_name}</td>
          <td>{card.points}</td>
        </tr>
      );
    });

    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Points</th>
          </tr>
        </thead>
        <tbody>{usersList}</tbody>
      </table>
    );
  }
}

export default observer(Dashboard);
