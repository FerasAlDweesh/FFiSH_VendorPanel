import React, { Component } from "react";
import { observer } from "mobx-react";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

//Stylesheet
import "./CardForm.css";

//Store
import vendorStore from "../../stores/VendorStore";

class CardForm extends Component {
  state = {
    name: "",
    image: "",
    points: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(event);
    vendorStore.createCard(this.state);
  };

  handleFileChange = event => {
    this.setState({ [event.target.name]: event.target.files[0] });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <center>
            <strong>
              <h1>Create Your Card</h1>
            </strong>
          </center>
          <div className="form-group row">
            <label for="inputName3" className="col-sm-2 col-form-label">
              Card Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputName3"
                placeholder="input Card Name here..."
                name="name"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label
              for="exampleFormControlSelect1"
              className="col-sm-2 col-form-label"
            >
              Number of Points
            </label>
            <div className="col-sm-10">
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                name="points"
                onChange={this.handleChange}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label
              for="exampleFormControlFile1"
              className="col-sm-2 col-form-label"
            >
              Background Image
            </label>
            <div className="col-sm-10">
              <input
                type="file"
                className="form-control-file"
                id="exampleFormControlFile1"
                name="image"
                onChange={this.handleFileChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <center>
                <button type="submit" className="btn btn-primary">
                  Create Card
                </button>
              </center>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default observer(CardForm);
