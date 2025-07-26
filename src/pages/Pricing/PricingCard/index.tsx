import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'

import classes from './PricingCard.module.css'

interface PricingCardProps {
  title: string
  subtitle: string
  tag?: string
  descriptions: string[]
  price: string
  unit?: string
  footerNote?: string
  highlight?: boolean
}

export default function PricingCard({
  title,
  subtitle,
  tag,
  descriptions,
  price,
  unit = '/mo',
  footerNote,
  highlight = false
}: PricingCardProps) {
  return (
    <Card className={`${classes.card} ${highlight && classes.highlight}`}>
      <CardContent>
        <div className={classes.header}>
          <div className={classes['header-left']}>
            <h2 className={classes.title}>{title}</h2>
            <span className={classes.subtitle}>{subtitle}</span>
          </div>
          <div className={classes['header-right']}>
            {tag && <div className={classes.tag}>🎉 {tag}</div>}
          </div>
        </div>

        <div className={classes.description}>
          {descriptions.map((desc, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: desc }} />
          ))}
        </div>

        <div className={classes.priceBox}>
          <p>
            <span className={classes.price}>${price}</span>
            <span className={classes.unit}>{unit}</span>
          </p>

          <p className={classes.footerNote}>{footerNote}</p>
        </div>


        <Button
          variant="contained"
          fullWidth
          size="large"
          className={classes.button}
        >
          Subscribe
        </Button>
      </CardContent>
    </Card>
  )
}
