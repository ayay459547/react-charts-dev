import Grid from '@/components/layout/Grid'
import PieChart from '@/components/charts/PieChart'

import classes from '../Charts.module.css'

import { SimplePieChartList, CustomActiveShapePieChartList } from './data'

export default function PieCharts() {
  return (
    <Grid container spacing={6} className='fill'>
      <Grid size={{ xs: 12 }}>
        <h3 className={classes.title}>Pie Charts</h3>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <div className={classes.charts}>
          <PieChart
            title="Simple Pie Chart"
            PieList={SimplePieChartList}
          />
        </div>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <div className={classes.charts}>
          <PieChart
            title="Custom Active Shape Pie Chart"
            PieList={CustomActiveShapePieChartList}
          />
        </div>
      </Grid>
    </Grid>
  )
}