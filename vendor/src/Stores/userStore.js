import { decorate, observable } from "mobx";

import { instance } from "./instance";

class UserStore {
  users = [];

  fetchAllUsers = async () => {
    try {
      const res = await instance.get("vendors/");
      const users = res.data;
      console.log("Errorrrrrr", users);
      this.users = users;
    } catch (err) {
      console.log("ERROR", err);
    }
  };
}
decorate(UserStore, {
  user: observable
});

const userStore = new UserStore();
userStore.fetchAllUsers();

export default userStore;
