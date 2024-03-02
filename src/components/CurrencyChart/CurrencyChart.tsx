/* eslint-disable @typescript-eslint/no-explicit-any */
import { tooltip } from '../../utils/objectHelpers';
import { ReactECharts } from '../Echarts/ReactECharts';
import { ICurrencyChartProps } from './CurrencyChart.types';


export default function CurrencyChart(props: ICurrencyChartProps) {
  const option = {
    grid: { left: 100, right: 50 },
    tooltip: {
      trigger: 'axis',
      formatter: (params: any) => {
        const date = params[0].name;
        const value = params[0].value;
        const currencyName = props.objHelperFuncOne();
        return tooltip({date, currencyName, value})
      },
      renderMode: 'html'
    },
    xAxis: {
      data: props.objHelperFuncThree(),
      axisLine: {
        show: false
      },
      boundaryGap: false,
      axisTick: {
        show: false
      },
      axisLabel: {
        formatter: (value: string) => {
          const [month, year] = value.split(' ');
          return `${month} ${year}`
        }
      }
    },
    yAxis: {
      min: 'dataMin',
      max: 'dataMax',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      },
      minInterval: 1,
      maxInterval: 4,
      axisLabel: {
        formatter: (value: number, index: number) => index === 0 ? '' : value,
      },
    },
    series: [{
      name: props.objHelperFuncOne(),
      type: 'line',
      symbol: 'none',
      color: '#F38B00',
      data: props.objHelperFuncTwo(),
    }]
  };

  if (props.error) {
    return <h1 style={{textAlign: "center"}}>{props.error}</h1>
  }

  return (
    <>
      <ReactECharts
        option={option}
        style={{ height: 400 }}
      />
    </>
  )
}