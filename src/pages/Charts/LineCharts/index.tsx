import { ReferenceLine } from 'recharts'

import Grid from '@/components/layout/Grid'
import LineChart from '@/components/charts/LineChart'

import classes from '../Charts.module.css'

import {
  SimpleLineChartData, SimpleLineChartList,
  DashedLineChartData, DashedLineChartList,
  VerticalLineChartData, VerticalLineChartList,
  LineChartWithReferenceLinesData, LineChartWithReferenceLinesList
} from './data'

export default function LineCharts() {
  return (
    <Grid container spacing={6} className='fill'>
      <Grid size={{ xs: 12 }}>
        <h3 className={classes.title}>Line Charts</h3>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <div className={classes.charts}>
          <LineChart
            title="Simple Line Chart"
            XAxisKey="name"
            data={SimpleLineChartData}
            LineList={SimpleLineChartList}
          />
        </div>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <div className={classes.charts}>
          <LineChart
            title="Dashed Line Chart"
            XAxisKey="name"
            data={DashedLineChartData}
            LineList={DashedLineChartList}
          />
        </div>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <div className={classes.charts}>
          <LineChart
            title="Vertical Line Chart"
            YAxisKey="name"
            layout="vertical"
            XAxisType="number"
            YAxisType="category"
            data={VerticalLineChartData}
            LineList={VerticalLineChartList}
          />
        </div>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <div className={classes.charts}>
          <LineChart
            title="Line Chart With Reference Lines"
            XAxisKey="name"
            data={LineChartWithReferenceLinesData}
            LineList={LineChartWithReferenceLinesList}
          >
            <ReferenceLine x="Page C" stroke="red" label="Max PV PAGE" />
            <ReferenceLine y={9800} label="Max" stroke="red" />
          </LineChart>
        </div>
      </Grid>
    </Grid>
  )
}