import Axios  from "axios";

const axiosPublic=Axios.create({
    baseURL: "https://bangladeshiit-server-api.onrender.com",
   
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;