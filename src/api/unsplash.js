import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID d058d99844024ff46d1a068ce97e06f2aca463dce21e345e7ca26e1479b620de"
  }
});
