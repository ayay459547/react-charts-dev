import Addchart from '@mui/icons-material/Addchart'

import classes from './Home.module.css'
import Dashboard from './Dashboard'
import Report from './Report'
import DenseTable from './DataTable'

export default function Home() {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>
        Create beautiful charts
        <Addchart />
        <p>with Vite and React</p>
      </h2>
      <p>Welcome to the home page!</p>
      <Dashboard />

      <h2 className={classes.title}>Beautiful charts</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate quibusdam?</p>
      <Report />

      <h2 className={classes.title}>Dessert List</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, hic.</p>
      <div className={classes.table}>
        <DenseTable />
      </div>
    </div>
  )
}
