import axios from "axios";

const BASE_URL = "https://back-end-portfolio-api.vercel.app"

export const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});