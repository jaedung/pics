import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID c3ba1d19811ceaede30f7e53a9201c63cc8fb95b4d29314a57b81e38d5391ff1"
  }
});
