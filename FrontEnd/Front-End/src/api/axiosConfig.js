import axios from "axios";

const api = axios.create({

    // creates instance custom axios api
    baseURL : "http://localhost:"   // backend url
    
});

//Add  a token to the request headers
//This interceptors runs before every api methods
api.interceptors.request.use((config) => {

    const token = localStorage.getItem("token"); //Gets the saved tokens from browser local storage (saved after login)

    // after login
    if(!token){
         config.headers.Authorization = `Bearer ${token}`;
    }

    return config; // sends modified request
});

export default api;