import { decorate, observable } from "mobx";
import axios from "axios";
import jwt_decode from "jwt-decode";

class AuthStore {
  user = null;

  setUser = token => {
    if (token) {
      localStorage.setItem("myToken", token);
      axios.defaults.headers.common.Authorization = `jwt ${token}`;
      const decodedUser = jwt_decode(token);
      this.user = decodedUser;
    } else {
      delete axios.defaults.headers.common.Authorization;
      localStorage.removeItem("myToken");
      this.user = null;
    }
  };

  loginUser = async (userData, history) => {
    try {
      const res = await axios.post("127.0.0.1:8000/vendor/login/", userData);
      const user = res.data;
      this.setUser(user.token);
      history.replace("/list");
    } catch (err) {
      console.log(err.response.data);
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

  logout = () => {
    this.setUser();
  };
}
decorate(AuthStore, {
  user: observable
});
const authStore = new AuthStore();
export default authStore;
