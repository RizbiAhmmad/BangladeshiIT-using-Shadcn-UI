import Axios from "axios";
import { API_BASE_URL } from "../config/apiConfig";

const axiosPublic = Axios.create({
  baseURL: API_BASE_URL,
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
