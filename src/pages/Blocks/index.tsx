import AreaChart from '@mui/icons-material/AreaChart'
import BarChart from '@mui/icons-material/BarChart'
import Insights from '@mui/icons-material/Insights'
import DonutLarge from '@mui/icons-material/DonutLarge'
import Map from '@mui/icons-material/Map'
import CalendarMonth from '@mui/icons-material/CalendarMonth'
import AccountTree from '@mui/icons-material/AccountTree'
import ViewTimeline from '@mui/icons-material/ViewTimeline'
import TableChart from '@mui/icons-material/TableChart'

import BlockView from './BlockView'
import classes from './Blocks.module.css'

export default function Blocks() {
  return (
   <div className={classes.container}>
      <h1 className={classes.title}>
        25+
        <span className={classes.premium}>Premium</span>
        UI Blocks
      </h1>
      <p className={classes.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit iusto dolorem nostrum maiores, itaque iure nobis tenetur inventore? Quam sapiente nobis rerum ipsam, beatae fugiat atque alias modi?</p>

      <div className={classes.blocks}>
        <BlockView
          icon={<AccountTree />}
          title="Flow"
          description="Visualize processes with flow or decision trees"
        />
        <BlockView
          icon={<ViewTimeline />}
          title="Gantt"
          description="Track project timelines and dependencies"
        />
        <BlockView
          icon={<Map />}
          title="Map"
          description="Geographical visualization of data on interactive maps"
        />

        <BlockView
          icon={<AreaChart />}
          title="Area Charts"
          description="Visualize trends over time with smooth area charts"
        />
        <BlockView
          icon={<BarChart />}
          title="Bar Charts"
          description="Compare categories with clear, vertical bars"
        />
        <BlockView
          icon={<Insights />}
          title="Line Charts"
          description="Display continuous data using line connections"
        />

        <BlockView
          icon={<DonutLarge />}
          title="Donut Charts"
          description="Represent data proportions in a circular format"
        />
        <BlockView
          icon={<CalendarMonth />}
          title="Calendar"
          description="Organize events and dates in a structured calendar"
        />
        <BlockView
          icon={<TableChart />}
          title="Table"
          description="Display structured data with sorting and filtering"
        />
      </div>
    </div>
  )
}