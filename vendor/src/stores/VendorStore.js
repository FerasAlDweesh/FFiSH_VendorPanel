import { decorate, observable } from "mobx";
import instance from "./instance";

class VendorStore {
  name = [];
  image = null;
  points = [];
  category = [];

  createCard = async data => {
    try {
      let form_data = new FormData();
      form_data.append("name", data.name);
      form_data.append("image", data.image);
      form_data.append("points", data.points);
      form_data.append("category", data.category);
      const res = await instance.post("vendors/create/", form_data, {
        headers: { "Content-type": "multipart/form-data" }
      });
    } catch (err) {
      console.error(err.response.data);
    }
  };
}

decorate(VendorStore, {
  name: observable,
  image: observable,
  points: observable,
  category: observable
});

const vendorStore = new VendorStore();

export default vendorStore;
