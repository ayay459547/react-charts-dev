import type { ComponentProps } from 'react'
import CardHeader from '@mui/material/CardHeader'

interface IProps extends ComponentProps<typeof CardHeader> {}

export default function ICardHeader({ children, ...props }: IProps) {
  return (
    <CardHeader {...props}>{children}</CardHeader>
  )
}

