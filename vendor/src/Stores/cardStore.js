import { decorate, observable } from "mobx";
import instance from "./instance";

class CardStore {
  cards = [];
  loading = true;

  fetchAllCards = async () => {
    try {
      const res = await instance.get("vendors/dashboard/");
      const cards = res.data;
      this.cards = cards;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };

  // getVendorById = id => this.cards.find(card => +card.id === +id);
}
decorate(CardStore, {
  cards: observable,
  loading: observable
});
const cardStore = new CardStore();
export default cardStore;
