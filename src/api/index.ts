import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class HttpService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = this.setAxiosInstance();
  }

  private setAxiosInstance() {
    const axiosInstance = axios.create();
    axiosInstance.defaults.baseURL = process.env.REACT_APP_API_BASE_URL || "";
    return axiosInstance;
  }

  public get(path: string, config?: AxiosRequestConfig) {
    return this.axiosInstance
      .get(path, config)
      .then((response) => Promise.resolve(response.data));
  }
}

export const httpService = new HttpService();
