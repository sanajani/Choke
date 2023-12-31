
import axios from 'axios';

const SERVER_URL = import.meta.env.SERVER_URL


export const api = axios.create({
    baseURL: SERVER_URL|| "http://localhost:9808",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    }
})
