import { decorate, observable } from "mobx";
import instance from "./instance";

class VendorStore {
  name = [];
  image = [];
  points = [];

  createCard = async userData => {
    try {
      const res = await instance.post("vendors/create/", userData);

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
