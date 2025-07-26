import type { ReactNode } from 'react'

import classes from './DesignInfo.module.css'

interface DesignInfoProps {
  icon: ReactNode;
  title: string;
  descriptions: string[];
}

export default function DesignInfo({
  icon,
  title,
  descriptions = []
}: DesignInfoProps) {
  return (
    <div className={classes.container}>
      <div className={classes.icon}>
        {icon}
      </div>
      <div className={classes.details}>
        <h4 className={classes.title}>{title}</h4>
        <ul className={classes.list}>
          {descriptions.map(text => {
            return (
              <li key={text} className={classes.item}>{text}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}