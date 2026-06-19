import axios from "axios";

const rawBaseUrl = import.meta.env.VITE_API_URL?.trim();
const fallbackBaseUrl =
    import.meta.env.DEV ? "http://localhost:3000" : "";
const baseURL = (rawBaseUrl || fallbackBaseUrl).replace(/\/+$/, "");

if (!baseURL) {
    console.warn(
        "VITE_API_URL is not configured. API requests will use the current origin."
    );
}

const api = axios.create({
    // creates instance custom axios api
    baseURL, // backend url
    timeout: 15000
});

//Add  a token to the request headers
//This interceptors runs before every api methods
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token"); //Gets the saved tokens from browser local storage (saved after login)

    // after login
    if(token){
         config.headers.Authorization = `Bearer ${token}`;
    }
    return config; // sends modified request
});

export default api;
