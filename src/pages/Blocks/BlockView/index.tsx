import type { ReactNode } from 'react'

import classes from './BlockView.module.css'

interface BlockViewProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function BlockView({
  icon,
  title,
  description
}: BlockViewProps) {
  return (
    <div className={classes.container}>
      <div className={classes.icon}>
        {icon}
      </div>
      <h5 className={classes.title}>{title}</h5>
      <p className={classes.description}>{description}</p>
    </div>
  )
}