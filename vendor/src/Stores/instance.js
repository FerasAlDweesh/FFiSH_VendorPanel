import axios from "axios";

const instance = axios.create({
  baseURL: "http://207.154.194.82/api/"
});

export default instance;
