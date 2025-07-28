import { Rectangle } from 'recharts'

export const SimpleBarChartData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
]

export const SimpleBarChartList = [
  {
    key: 'pv',
    dataKey: 'pv',
    fill: '#ef75e7ff',
    activeBar: <Rectangle fill="pink" stroke="blue" />,
    isAnimationActive: false
  },
  {
    key: 'uv',
    dataKey: 'uv',
    fill: '#54ea8dff',
    activeBar: <Rectangle fill="gold" stroke="purple"/>,
    isAnimationActive: false
  }  
]

export const StackedBarChartData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
]

export const StackedBarChartList = [
  {
    key: 'pv',
    dataKey: 'pv',
    stackId: 'a',
    fill: '#cef65fff',
    isAnimationActive: false
  },
  {
    key: 'uv',
    dataKey: 'uv',
    stackId: 'a',
    fill: '#5ca3eaff',
    isAnimationActive: false
  }
]

export const PositiveAndNegativeBarChartData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: -3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: -2000,
    pv: -9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: -1890,
    pv: 4800,
    amt: 2181,
  },
]

export const PositiveAndNegativeBarChartList = [
  {
    key: 'pv',
    dataKey: 'pv',
    fill: '#8884d8',
    isAnimationActive: false
  },
  {
    key: 'uv',
    dataKey: 'uv',
    fill: '#82ca9d',
    isAnimationActive: false
  }
]

export const BrushBarChartData = [
  { name: '1', uv: 300, pv: 456 },
  { name: '2', uv: -145, pv: 230 },
  { name: '3', uv: -100, pv: 345 },
  { name: '4', uv: -8, pv: 450 },
  { name: '5', uv: 100, pv: 321 },
  { name: '6', uv: 9, pv: 235 },
  { name: '7', uv: 53, pv: 926 },
  { name: '8', uv: 252, pv: -378 },
  { name: '9', uv: 79, pv: -210 },
  { name: '10', uv: 294, pv: -23 },
  { name: '12', uv: 43, pv: 45 },
  { name: '13', uv: -74, pv: 90 },
  { name: '14', uv: -71, pv: 130 },
  { name: '15', uv: -117, pv: 235 },
]

export const BrushBarChartList = [
  {
    key: 'pv',
    dataKey: 'pv',
    fill: '#8884d8',
    isAnimationActive: false
  },
  {
    key: 'uv',
    dataKey: 'uv',
    fill: '#82ca9d',
    isAnimationActive: false
  },
]
