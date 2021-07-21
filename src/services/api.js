import axios from "axios";

export const api = axios.create({
  baseURL: "https://portfolio-samuel.herokuapp.com",
});
