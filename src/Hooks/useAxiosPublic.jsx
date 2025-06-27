import Axios  from "axios";

const axiosPublic=Axios.create({
    baseURL: "https://bangladeshi-it-server.vercel.app",
   
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;