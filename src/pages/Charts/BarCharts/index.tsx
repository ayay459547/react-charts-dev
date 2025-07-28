import { ReferenceLine, Brush } from 'recharts'

import Grid from '@/components/layout/Grid'
import BarChart from '@/components/charts/BarChart'

import classes from '../Charts.module.css'

import {
  SimpleBarChartData, SimpleBarChartList,
  StackedBarChartData, StackedBarChartList,
  PositiveAndNegativeBarChartData, PositiveAndNegativeBarChartList,
  BrushBarChartData, BrushBarChartList
} from './data'

export default function BarCharts() {
  return (
    <Grid container spacing={6} className='fill'>
      <Grid size={{ xs: 12 }}>
        <h3 className={classes.title}>Bar Charts</h3>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <div className={classes.charts}>
          <BarChart
            title="Simple Bar Chart"
            XAxisKey="name"
            data={SimpleBarChartData}
            BarList={SimpleBarChartList}
          />
        </div>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <div className={classes.charts}>
          <BarChart
            title="Stacked Bar Chart"
            XAxisKey="name"
            data={StackedBarChartData}
            BarList={StackedBarChartList}
          />
        </div>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <div className={classes.charts}>
          <BarChart
            title="Positive And Negative Bar Chart"
            XAxisKey="name"
            data={PositiveAndNegativeBarChartData}
            BarList={PositiveAndNegativeBarChartList}
          >
            <ReferenceLine y={0} stroke="#000" />
          </BarChart>
        </div>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <div className={classes.charts}>
          <BarChart
            title="Brus hBar Chart"
            XAxisKey="name"
            data={BrushBarChartData}
            BarList={BrushBarChartList}
          >
            <ReferenceLine y={0} stroke="#000" />
            <Brush dataKey="name" height={30} stroke="#8884d8" />
          </BarChart>
        </div>
      </Grid>
    </Grid>
  )
}