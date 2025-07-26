import type { ReactNode } from 'react'

import classes from './Home.module.css'

interface DescriptionProps {
  title: string;
  text: string;
  icon: ReactNode;
}

export default function Description({
  title,
  text,
  icon
}: DescriptionProps) {
  return (
    <div className={classes.description}>
      {icon}
      <label>{title}</label>
      <p>{text}</p>
    </div>
  )
}