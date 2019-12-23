import React, { Component } from "react";
import { observer } from "mobx-react";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

//Store
import vendorStore from "../../stores/VendorStore";
import { observer } from "mobx";

class CardForm extends Component {
  state = {
    name: "",
    image: "",
    points: ""
  };
  render() {
    return (
      <form>
        <div class="form-group row">
          <label for="inputName3" class="col-sm-2 col-form-label">
            Card Name
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputName3"
              placeholder="input Card Name here..."
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="exampleFormControlSelect1">Select of Points</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="form-group row">
          <label for="exampleFormControlFile1">Background Image</label>
          <input
            type="file"
            class="form-control-file"
            id="exampleFormControlFile1"
          />
        </div>
      </form>
    );
  }
}

export default observer(CardForm);
