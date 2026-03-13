import axios from "axios";

const instance = axios.create({
  baseURL: "https://scoopify-ice-cream-store.onrender.com/", 
});

export default instance;
