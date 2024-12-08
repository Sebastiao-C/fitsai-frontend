import axios from "axios";

const api = axios.create({
    baseURL: "https://fitsai-eaecdcbqhxbhghaf.westeurope-01.azurewebsites.net", // Your FastAPI backend URL
});

export default api;
