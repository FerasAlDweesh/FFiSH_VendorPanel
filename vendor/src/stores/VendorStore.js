import { decorate, observable, computed } from "mobx";

class VendorStore {
  name = [];
  image = [];
  points = [];
}

CreateCard = async userData => {
  try {
    const res = await axios.post("https://www.someapi.com/names/", userData);
    const data = res.data;
  } catch (err) {
    console.error(err.response);
  }
};

decorate(VendorStore, {
  name: observable,
  image: observable,
  points: computed
});

const vendorStore = new VendorStore();

export default vendorStore;
