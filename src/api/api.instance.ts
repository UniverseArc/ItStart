import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://65df9b33ff5e305f32a2a4a1.mockapi.io/gazprom/itstart/',
});