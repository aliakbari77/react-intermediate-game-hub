import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string;
  results: T[];
}


const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e5e2e477453f4176910713f0c526f77e",
  },
});

class APIClient<T>{
  endpoint: string;

  constructor(endpoint: string){
    this.endpoint = endpoint
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data)
  }
}

export default APIClient