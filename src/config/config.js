import axios from "axios";

const axiosApi = axios.create({
    baseURL:'http://192.168.254.8:8000/api/'
})

export default axiosApi