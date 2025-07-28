import Grid from '@/components/layout/Grid'
import AreaChart from '@/components/charts/AreaChart'

import classes from '../Charts.module.css'

import {
  SimpleAreaChartData, SimpleAreaChartList,
  StackedAreaChartData, StackedAreaChartList,
  PercentAreaChartData, PercentAreaChartList,
  AreaChartFillByValueData, AreaChartFillByValueList
} from './data'

const toPercent = (decimal = 0) => {
  return `${(decimal * 100).toFixed(2)}%`
}

const gradientOffset = (data: any[]) => {
  const dataMax = Math.max(...data.map((i) => i.uv))
  const dataMin = Math.min(...data.map((i) => i.uv))

  if (dataMax <= 0) return 0
  if (dataMin >= 0) return 1
  return dataMax / (dataMax - dataMin)
}

export default function AreaCharts() {
  const off = gradientOffset(AreaChartFillByValueData)

  return (
    <Grid container spacing={6} className='fill'>
      <Grid size={{ xs: 12 }}>
        <h3 className={classes.title}>Area Charts</h3>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <div className={classes.charts}>
          <AreaChart
            title="Simple Area Chart"
            XAxisKey="name"
            data={SimpleAreaChartData}
            AreaList={SimpleAreaChartList}
          />
        </div>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <div className={classes.charts}>
          <AreaChart
            title="Stacked Area Chart"
            XAxisKey="name"
            data={StackedAreaChartData}
            AreaList={StackedAreaChartList}
          />
        </div>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <div className={classes.charts}>
          <AreaChart
            title="Percent Area Chart"
            XAxisKey="month"
            stackOffset="expand"
            tickFormatter={toPercent}
            margin={{ left: 60 }}
            data={PercentAreaChartData}
            AreaList={PercentAreaChartList}
          />
        </div>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <div className={classes.charts}>
          <AreaChart
            title="Area Chart Fill By Value"
            XAxisKey="name"
            data={AreaChartFillByValueData}
            AreaList={AreaChartFillByValueList}
          >
            <defs>
              <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset={off} stopColor="#82ca9d" stopOpacity={1} />
                <stop offset={off} stopColor="#ffc658" stopOpacity={1} />
              </linearGradient>
            </defs>
          </AreaChart>
        </div>
      </Grid>
    </Grid>
  )
}