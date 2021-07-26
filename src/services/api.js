import axios from "axios";

export const api = axios.create({
  baseURL: "http://ec2-3-85-39-7.compute-1.amazonaws.com:3003",
});
