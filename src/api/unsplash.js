import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID ff1f17bf49cf976a6ec3f2478d759c936d31b7d80f8ba848a260b26d9ae11aa4"
  }
});
