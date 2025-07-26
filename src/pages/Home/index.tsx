import Addchart from '@mui/icons-material/Addchart'
import Extension from '@mui/icons-material/Extension'
import BookmarkAdded from '@mui/icons-material/BookmarkAdded'
import FlashOn from '@mui/icons-material/FlashOn'

import classes from './Home.module.css'
import Description from './Description'
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

      <div className={classes.descriptions}>
        <Description
          title="Composable"
          text="Quickly build your charts with decoupled, reusable React components."
          icon={<Extension />}
        />
        <Description
          title="Reliable"
          text="Built on top of SVG elements with a lightweight dependency on D3 submodules."
          icon={<BookmarkAdded />}
        />
        <Description
          title="Powerful"
          text="Customize your chart by tweaking component props and passing in custom components."
          icon={<FlashOn />}
        />
      </div>

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
