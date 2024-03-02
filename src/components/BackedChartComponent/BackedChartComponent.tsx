import { useEffect, useState } from 'react';
import CurrencyChart from '../CurrencyChart/CurrencyChart';
import { averageValue, datesInTooltip, nameCurrencyInTooltip, rublesDataInTooltip, whichCurrency } from '../../utils/objectHelpers';
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';
import useTypedSelector from '../../hooks/useTypedSelector';
import { Item } from './BackedChartComponent.types';
import s from './BackedChart.module.css'
import { Fallback } from '../Fallback/Fallback';
import { useAppDispatch } from '../../hooks/useDispatch';
import { fetchCurrenciesThunkCreator } from '../../store/ActionCreators/requestCurrencies';

const items = [
    {
        value: '$',
        indicator: 'Курс доллара'
    },
    {
        value: '€',
        indicator: 'Курс евро'
    },
    {
        value: '¥',
        indicator: 'Курс юаня',
    },

];

const BackedChartComponent = () => {
    const { currencies, error, isLoading } = useTypedSelector(state => state.currencies)

    const [value, setValue] = useState<Item | null>(items[0]);

    const filteredCurrencies = whichCurrency(currencies, value?.indicator)

    const getName = () => {
        return nameCurrencyInTooltip(filteredCurrencies);
    }
    
    const getRublesData = () => {
        return rublesDataInTooltip(filteredCurrencies);
    }

    const getMonthData = () => {
        return datesInTooltip(filteredCurrencies);
    }

    const dispatch = useAppDispatch();
    useEffect(() => {
      dispatch(fetchCurrenciesThunkCreator())
    }, [dispatch])    

    if (isLoading) {
        return <Fallback />
    }

    if (currencies.length === 0 && !error) {
        return null
    }

    return (
        <div className={s.chartWrapper}>
            <div className={s.currencyAndGroupWrapper}>
                <div className={s.currencyName}>
                    <b>{(value?.indicator)?.toUpperCase()}, {value?.value}/₽</b>
                </div>
                <div className={s.choiceGroup}>
                    <ChoiceGroup
                        value={value}
                        size='xs'
                        onChange={(e) => setValue(e.value)}
                        items={items}
                        getItemLabel={(item) => item.value}
                        name="CurrencyGroup"
                        multiple={false}
                    />
                </div>
            </div>
            <div className={s.chartAndAverageWrapper}>
                <div className={s.chartWrapper}>
                    <CurrencyChart
                        error={error}
                        filteredCurrencies={filteredCurrencies}
                        objHelperFuncOne={getName}
                        objHelperFuncTwo={getRublesData}
                        objHelperFuncThree={getMonthData}
                    />
                </div>
                <div className={s.averageWrapper}>
                    <div className={s.averageText}>
                        Среднее за период
                    </div>
                    <div className={s.averageNumber}>
                        {averageValue(filteredCurrencies)}<span className={s.averageNumberRubSign}> ₽</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export { BackedChartComponent };