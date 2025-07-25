import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

import classes from './ProgressCard.module.css'

interface IProgressCardProps {
  title: string,
  unitLabel: string,
  currentValue: number,
  totalValue: number
}

export default function IProgressCard({
  title,
  unitLabel = '',
  currentValue = 0,
  totalValue = 0
}: IProgressCardProps) {
  const percent = totalValue > 0 ? ((currentValue / totalValue) * 100).toFixed(2) : '0.00'


  return (
    <Card>
      <CardContent>
        <div className={classes.container}>
          <h4 className={classes.title}>{title}</h4>
          <label className={classes.label}>{currentValue} {unitLabel}</label>

          <div className={classes['progress-info']}>
            <p className={classes.percent}>{percent}%</p>
            <p className={classes.ratio}>{currentValue} / {totalValue}</p>
          </div>
          <div className={classes['percent-bar']}>
            <div className={classes['percent-highlight']} style={{ width: `${percent}%` }} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}