import { instance } from "./api.instance";

export const currenciesAPI = {
    getCurrencies: () => {
        return instance.get(`currenciesData`)
    },
}