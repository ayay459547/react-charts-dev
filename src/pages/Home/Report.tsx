import Grid from '@/components/layout/Grid'
import ProgressCard from '@/components/surfaces/ProgressCard'
import BarChart from '@/components/charts/BarChart'

import classes from './Home.module.css'

export default function Report() {
  return (
    <div className={classes.report}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, lg: 5 }}>
          <div className={classes.progress}>
            <ProgressCard
              title="Storage used"
              unitLabel="GB"
              currentValue={1.85}
              totalValue={10}
            />
            <ProgressCard
              title="Weekly active users"
              unitLabel="people"
              currentValue={250}
              totalValue={512}
            />
            <ProgressCard
              title="Current costs"
              unitLabel="TWD"
              currentValue={288.5}
              totalValue={300}
            />
          </div>
        </Grid>
        <Grid size={{ xs: 12, lg: 7 }}>
          <BarChart
            title="Bar Chart"
            XAxisKey="name"
            BarList={[
              {
                key: 'pv',
                dataKey: 'pv',
                stackId: 'a',
                fill: '#8884d8'
              },
              {
                key: 'amt',
                dataKey: 'amt',
                stackId: 'a',
                fill: '#82ca9d'
              },
              {
                key: 'uv',
                dataKey: 'uv',
                stackId: 'b',
                fill: '#ffc658'
              }
            ]}
            data={[
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
              {
                name: 'Page F',
                uv: 2390,
                pv: 3800,
                amt: 2500,
              },
              {
                name: 'Page G',
                uv: 3490,
                pv: 4300,
                amt: 2100,
              },
            ]}
          />
        </Grid>
      </Grid>
    </div>
  )
}