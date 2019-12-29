import { decorate, observable } from "mobx";
import instance from "./instance";

import jwt_decode from "jwt-decode";

class AuthStore {
  user = null;

  setUser = token => {
    if (token) {
      localStorage.setItem("myToken", token);
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      const decodedUser = jwt_decode(token);
      this.user = decodedUser;
    } else {
      delete instance.defaults.headers.common.Authorization;
      localStorage.removeItem("myToken");
      this.user = null;
    }
  };

  loginUser = async (userData, history) => {
    try {
      const res = await instance.post("login/", userData);
      const user = res.data;
      this.setUser(user.access);
      history.replace("/home");
    } catch (err) {
      console.log(err);
    }
  };

  checkForToken = () => {
    const token = localStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now() / 1000;
      const user = jwt_decode(token);
      if (user.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.logout();
      }
    }
  };

  logout = history => {
    this.setUser();
    history.replace("/login");
  };
}
decorate(AuthStore, {
  user: observable
});
const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
