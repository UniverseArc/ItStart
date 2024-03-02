import { Dispatch } from "redux"
import { ECurrenciesTypes, ICurrencyAction } from "../Reducers/currenciesReducer.types"
import { currenciesAPI } from "../../api/currencies"

export const fetchCurrenciesThunkCreator = () => {
    return async (dispatch: Dispatch<ICurrencyAction>) => {
        try {
            dispatch({type: ECurrenciesTypes.FETCH_INIT})
            const response = await currenciesAPI.getCurrencies()
            dispatch({type: ECurrenciesTypes.FETCH_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({
                type: ECurrenciesTypes.FETCH_FAILED,
                payload: "Не удалось запросить курс валют."
            })
        }
    }
}