import type { ComponentProps } from 'react'
import Grid from '@mui/material/Grid';

interface IProps extends ComponentProps<typeof Grid> {}

export default function IGrid({ children, ...props }: IProps) {
  return (
    <Grid {...props}>{children}</Grid>
  )
}

