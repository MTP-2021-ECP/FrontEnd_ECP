import axios from "axios";

let BaseApi = axios.create({
  baseURL: "https://free-covid-epitech.herokuapp.com/api/"
});

let Api = function() {
  let token = localStorage.getItem("accessToken");

  if (token) {
    BaseApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return BaseApi;
};

export default Api;
