export enum ECurrenciesTypes {
    FETCH_INIT = "CURRENCIES/FETCH_INIT",
    
    FETCH_SUCCESS = "CURRENCIES/FETCH_SUCCESS",

    FETCH_FAILED = "CURRENCIES/FETCH_FAILED",
}

export interface FETCH_INIT {
    type: ECurrenciesTypes.FETCH_INIT,
}

export interface FETCH_SUCCESS {
    type: ECurrenciesTypes.FETCH_SUCCESS,
    payload: ICurrenciesData[],
}

export interface FETCH_FAILED {
    type: ECurrenciesTypes.FETCH_FAILED,
    payload: string,
}


export interface ICurrenciesState {
    currencies: ICurrenciesData[],
    error: null | string,
    isLoading: boolean,
}

export interface ICurrenciesData {
    date: string,
    month: string,
    indicator: string,
    value: number,
}


export type ICurrencyAction =  FETCH_FAILED | FETCH_SUCCESS | FETCH_INIT