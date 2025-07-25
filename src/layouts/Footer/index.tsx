import Button from '@/components/inputs/Button'
import Facebook from '@mui/icons-material/Facebook'
import Instagram from '@mui/icons-material/Instagram'
import GitHub from '@mui/icons-material/GitHub'

import classes from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <>
      <div className={classes.content}>
        <p className={classes.title}>Ready to build something amazing?</p>
        <p className={classes.label}>Lorem ipsum dolor sit, adipisicing elit. Voluptate alias numquam molestiae delectus ullam fugit facilis a eaque aspernatur facere, quod provident eius, accusamus commodi, asperiores labore necessitatibus assumenda tempora.</p>

        <Button variant="contained">
          Browse Charts
        </Button>
      </div>
      <div className={classes.contact}>
        <div className={classes.icons}>
          <Instagram className={classes.icon} fontSize="large" />
          <Facebook className={classes.icon} fontSize="large" />
          <GitHub className={classes.icon} fontSize="large" />
        </div>

        <p className={classes.copyright}>© {year} Caleb. ayay459547@gmail.com</p>
      </div>
    </>
  )
}