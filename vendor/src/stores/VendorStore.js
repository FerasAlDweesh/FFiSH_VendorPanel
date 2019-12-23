import { decorate, observable, computed } from "mobx";
import axios from "axios";

class VendorStore {
  name = [];
  image = [];
  points = [];

  createCard = async userData => {
    try {
      const res = await axios.post("127.0.0.1:8000/api/cardform/", userData);
      const data = res.data;
    } catch (err) {
      console.error(err.response);
    }
  };
}

decorate(VendorStore, {
  name: observable,
  image: observable,
  points: observable
});

const vendorStore = new VendorStore();

export default vendorStore;
