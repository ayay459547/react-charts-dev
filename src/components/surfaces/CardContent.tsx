import type { ComponentProps } from 'react'
import CardContent from '@mui/material/CardContent';

interface IProps extends ComponentProps<typeof CardContent> {}

export default function ICardContent({ children, ...props }: IProps) {
  return (
    <CardContent {...props}>{children}</CardContent>
  )
}

