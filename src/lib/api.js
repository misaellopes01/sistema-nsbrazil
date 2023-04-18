import axios from 'axios'

export const api = axios.create({
    baseURL: "https://api-nsbrasil-production.up.railway.app",
})