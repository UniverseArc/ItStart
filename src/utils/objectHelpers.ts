import { ITooltipProps } from "../components/CurrencyChart/CurrencyChart.types"
import { ICurrenciesData } from "../store/Reducers/currenciesReducer.types"

export const rublesDataInTooltip = (data: ICurrenciesData[]) => {
    return data.map(el => {
        return el.value
    })
}

export const datesInTooltip = (data: ICurrenciesData[]) => {
    return data.map(el => {
        return el.month + " год"
    })
}

export const nameCurrencyInTooltip = (data: ICurrenciesData[]): string | undefined => {
    const foundItem = data.find(item => item.indicator !== undefined);
    return foundItem ? foundItem.indicator : undefined;
};

export const whichCurrency = (data: ICurrenciesData[], indicator?: string) => {
    return data.filter(el => {
        return el.indicator === indicator
    })
}

export const averageValue = (data: ICurrenciesData[]) => {
    const sum = data.reduce((partialSum, a) => partialSum + a.value, 0)
    return (sum / data.length).toFixed(1)
}

export const tooltip = ({date, currencyName, value}: ITooltipProps) => {
    return `
    <div style="text-align: left; padding: 10px;">
      <div style="font-weight: bold;">${date}</div>
      <div style="display: flex; align-items: center;">
        <span style="background-color: #F38B00; width: 10px; height: 10px; border-radius: 50%; margin-right: 5px;"></span>
        <span>${currencyName}</span>
        <span style="font-weight: bold; margin-left: 20px; padding-top: 2px;">${value}₽</span>
      </div>
    </div>
  `;
}
  