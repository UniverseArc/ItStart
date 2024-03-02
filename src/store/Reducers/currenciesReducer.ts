import { ECurrenciesTypes, ICurrenciesState, ICurrencyAction } from "./currenciesReducer.types"

const initialState: ICurrenciesState = {
    currencies: [],
    error: null,
    isLoading: false,
}

export const currenciesReducer = (state = initialState, action: ICurrencyAction): ICurrenciesState => {
    switch (action.type) {

        case ECurrenciesTypes.FETCH_INIT:
            return {currencies: [], error: null, isLoading: true}

        case ECurrenciesTypes.FETCH_SUCCESS:
            return {currencies: action.payload, error: null, isLoading: false}

        case ECurrenciesTypes.FETCH_FAILED:
            return {currencies: [], error: action.payload, isLoading: false}

        default:
            return state
    }
}