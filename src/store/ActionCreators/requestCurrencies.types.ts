/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";
import { ECurrenciesTypes } from "../Reducers/currenciesReducer.types";

export interface IApiMethod {
    apiMethod: () => Promise<AxiosResponse<any, any>>,
}

export interface IFetchType {
    fetchType: ECurrenciesTypes,
}