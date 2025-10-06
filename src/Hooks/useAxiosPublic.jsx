import Axios  from "axios";

const axiosPublic=Axios.create({
    baseURL: "http://72.60.199.112:5000",
   
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;