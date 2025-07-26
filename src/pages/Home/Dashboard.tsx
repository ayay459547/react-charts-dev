import Grid from '@/components/layout/Grid'
import LineChart from '@/components/charts/LineChart'
import RadarChart from '@/components/charts/RadarChart'
import PieChart from '@/components/charts/PieChart'
import TreeMap from '@/components/charts/TreeMap'

import classes from './Home.module.css'

export default function Dashboard() {
  return (
    <div className={classes.dashboard}>
      <Grid container spacing={6}>
        <Grid size={{ sm: 12, md: 7 }}>
          <div className={classes.line}>
            <LineChart
              title="Line Chart"
              XAxisKey="name"
              LineList={[
                {
                  type: 'monotone',
                  key: 'pv',
                  dataKey: 'pv',
                  stroke: '#8884d8',
                  activeDot: { r: 8 }
                },
                {
                  type: 'monotone',
                  key: 'uv',
                  dataKey: 'uv',
                  stroke: '#82ca9d'
                },
                {
                  type: 'monotone',
                  key: 'amt',
                  dataKey: 'amt',
                  stroke: '#d02f2fff'
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
          </div>
        </Grid>

        <Grid size={{ sm: 12, md: 5 }}>
          <div className={classes.pie}>
            <RadarChart
              title="RadarChart"
              data={[
                {
                  subject: 'Math',
                  A: 120,
                  B: 110,
                  fullMark: 150,
                },
                {
                  subject: 'Chinese',
                  A: 98,
                  B: 130,
                  fullMark: 150,
                },
                {
                  subject: 'English',
                  A: 86,
                  B: 130,
                  fullMark: 150,
                },
                {
                  subject: 'Geography',
                  A: 99,
                  B: 100,
                  fullMark: 150,
                },
                {
                  subject: 'Physics',
                  A: 85,
                  B: 90,
                  fullMark: 150,
                },
                {
                  subject: 'History',
                  A: 65,
                  B: 85,
                  fullMark: 150,
                },
              ]}
              PolarAngleAxisKey="subject"
              RadarList={[
                {
                  name:'Mike',
                  key:'A',
                  dataKey:'A',
                  stroke:'#8884d8',
                  fill:'#8884d8',
                  fillOpacity: 0.6
                },
                {
                  name: 'Lily',
                  key: 'B',
                  dataKey: 'B',
                  stroke: '#82ca9d',
                  fill: '#82ca9d',
                  fillOpacity: 0.6
                }
              ]}
            />
          </div>
        </Grid>

        <Grid size={{ sm: 12, md: 4 }}>
          <div className={classes.pie}>
            <PieChart
              title="PieChart"
              PieList={[
                {
                  key: 'inside',
                  data: [
                    { name: 'Group A', value: 400 },
                    { name: 'Group B', value: 300 },
                    { name: 'Group C', value: 300 },
                    { name: 'Group D', value: 200 }
                  ],
                  dataKey: 'value',
                  cx: '50%',
                  cy: '50%',
                  outerRadius: 60,
                  fill: '#d8bb84ff',
                  isAnimationActive: false
                },
                {
                  key: 'outside',
                  data: [
                    { name: 'A1', value: 100 },
                    { name: 'A2', value: 300 },
                    { name: 'B1', value: 100 },
                    { name: 'B2', value: 80 },
                    { name: 'B4', value: 30 },
                    { name: 'B5', value: 50 },
                    { name: 'C1', value: 100 },
                    { name: 'C2', value: 200 },
                    { name: 'D1', value: 150 }
                  ],
                  dataKey: 'value',
                  cx: '50%',
                  cy: '50%',
                  innerRadius: 70,
                  outerRadius: 90,
                  fill: '#82ca9d',
                  label: true,
                  isAnimationActive: false
                }
              ]}
            />
          </div>
        </Grid>

        <Grid size={{ sm: 12, md: 8 }}>
          <div className={classes.pie}>
            <TreeMap
              title="TreeMap"
              data={[
                {
                  name: 'controls',
                  children: [
                    { name: 'AnchorControl', size: 2138 },
                    { name: 'ClickControl', size: 3824 },
                    { name: 'Control', size: 1353 },
                    { name: 'ControlList', size: 4665 },
                    { name: 'DragControl', size: 2649 },
                    { name: 'ExpandControl', size: 2832 },
                    { name: 'HoverControl', size: 4896 },
                    { name: 'IControl', size: 763 },
                    { name: 'PanZoomControl', size: 5222 },
                    { name: 'SelectionControl', size: 7862 },
                    { name: 'TooltipControl', size: 8435 },
                  ],
                },
                {
                  name: 'data',
                  children: [
                    { name: 'Data', size: 20544 },
                    { name: 'DataList', size: 19788 },
                    { name: 'DataSprite', size: 10349 },
                    { name: 'EdgeSprite', size: 3301 },
                    { name: 'NodeSprite', size: 19382 },
                    {
                      name: 'render',
                      children: [
                        { name: 'ArrowType', size: 698 },
                        { name: 'EdgeRenderer', size: 5569 },
                        { name: 'IRenderer', size: 353 },
                        { name: 'ShapeRenderer', size: 2247 },
                      ],
                    },
                    { name: 'ScaleBinding', size: 11275 },
                    { name: 'Tree', size: 7147 },
                    { name: 'TreeBuilder', size: 9930 },
                  ],
                },
                {
                  name: 'events',
                  children: [
                    { name: 'DataEvent', size: 7313 },
                    { name: 'SelectionEvent', size: 6880 },
                    { name: 'TooltipEvent', size: 3701 },
                    { name: 'VisualizationEvent', size: 2117 },
                  ],
                },
                {
                  name: 'legend',
                  children: [
                    { name: 'Legend', size: 20859 },
                    { name: 'LegendItem', size: 4614 },
                    { name: 'LegendRange', size: 10530 },
                  ],
                }
              ]}
              dataKey='size'
              colors={['#9597E4', '#8DC77B', '#A5D297', '#E2CF45']}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
