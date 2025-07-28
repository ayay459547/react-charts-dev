export const SimpleAreaChartData = [
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
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

export const SimpleAreaChartList = [
  {
    type: 'monotone',
    key: 'uv',
    dataKey: 'uv',
    stroke: '#8884d8',
    fill: '#8884d8'
  }
]

export const StackedAreaChartData = [
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
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

export const StackedAreaChartList = [
  {
    type: 'monotone',
    key: 'uv',
    dataKey: 'uv',
    stackId: '1',
    stroke: '#2966d0ff',
    fill: '#34a8d6ff',
    isAnimationActive: false
  },
  {
    type: 'monotone',
    key: 'pv',
    dataKey: 'pv',
    stackId: '1',
    stroke: '#82ca9d',
    fill: '#82ca9d',
    isAnimationActive: false
  },
  {
    type: 'monotone',
    key: 'amt',
    dataKey: 'amt',
    stackId: '1',
    stroke: '#ffc658',
    fill: '#ffc658',
    isAnimationActive: false
  },
]

export const PercentAreaChartData = [
  {
    month: '2015.01',
    a: 4000,
    b: 2400,
    c: 2400,
  },
  {
    month: '2015.02',
    a: 3000,
    b: 1398,
    c: 2210,
  },
  {
    month: '2015.03',
    a: 2000,
    b: 9800,
    c: 2290,
  },
  {
    month: '2015.04',
    a: 2780,
    b: 3908,
    c: 2000,
  },
  {
    month: '2015.05',
    a: 1890,
    b: 4800,
    c: 2181,
  },
  {
    month: '2015.06',
    a: 2390,
    b: 3800,
    c: 2500,
  },
  {
    month: '2015.07',
    a: 3490,
    b: 4300,
    c: 2100,
  },
]

export const PercentAreaChartList = [
  {
    type: 'monotone',
    key: 'a',
    dataKey: 'a',
    stackId: '1',
    stroke: '#84c7d8ff',
    fill: '#849ad8ff',
    isAnimationActive: false
  },
  {
    type: 'monotone',
    key: 'b',
    dataKey: 'b',
    stackId: '1',
    stroke: '#26d416ff',
    fill: '#6ae568ff',
    isAnimationActive: false
  },
  {
    type: 'monotone',
    key: 'c',
    dataKey: 'c',
    stackId: '1',
    stroke: '#f1e315ff',
    fill: '#fff758ff',
    isAnimationActive: false
  },
]

export const AreaChartFillByValueData = [
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
    uv: -1000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 500,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: -2000,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: -250,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

export const AreaChartFillByValueList = [
  {
    type: 'monotone',
    key: 'uv',
    dataKey: 'uv',
    stroke: '#000',
    fill: 'url(#splitColor)'
  }
]
