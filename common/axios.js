import Axios from "axios";

export const axiosBaseUrl=Axios.create({
    baseURL:"http://localhost:3001",
    // withCredentials:true,
    headers: {
        Accept: "application/json",
        // "Content-Type":"application/json",
        // "Access-Control-Allow-Credentails":true,
    }
})