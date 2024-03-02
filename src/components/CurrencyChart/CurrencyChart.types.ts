/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICurrenciesData } from "../../store/Reducers/currenciesReducer.types";

export interface ICurrencyChartProps {
    error?: string | null,
    filteredCurrencies: ICurrenciesData[],
    objHelperFuncOne: () => string | undefined,
    objHelperFuncTwo: () => number[],
    objHelperFuncThree: () => string[]
}

export interface ITooltipProps {
    date: any,
    currencyName:  string | undefined,
    value: any
}
