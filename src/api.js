import axios from "axios";

const api = axios.create({
    baseURL: "fitsai-eaecdcbqhxbhghaf.westeurope-01.azurewebsites.net", // Your FastAPI backend URL
});

export default api;
