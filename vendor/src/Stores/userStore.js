import { decorate, observable } from "mobx";

import instance from "./instance";

class UserStore {
  users = [];
  loading = true;

  fetchAllUsers = async () => {
    try {
      const res = await instance.get("cards/");
      const users = res.data;
      console.log("USERSSS", users);
      this.users = users;
      this.loading = false;
    } catch (err) {
      console.log("ERROR", err.response.data);
    }
  };
}
decorate(UserStore, {
  users: observable,
  loading: observable
});

const userStore = new UserStore();

export default userStore;
