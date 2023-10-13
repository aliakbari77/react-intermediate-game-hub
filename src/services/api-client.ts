import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e5e2e477453f4176910713f0c526f77e",
  },
});
