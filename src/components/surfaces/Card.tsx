import type { ComponentProps } from 'react'
import Card from '@mui/material/Card';

interface IProps extends ComponentProps<typeof Card> {}

export default function ICard({ children, ...props }: IProps) {
  return (
    <Card {...props}>{children}</Card>
  )
}

