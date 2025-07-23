import type { ComponentProps } from 'react'
import CircularProgress from '@mui/material/CircularProgress';

interface IProps extends ComponentProps<typeof CircularProgress> {}

export default function ICircularProgress({ ...props }: IProps) {
  return (
    <CircularProgress {...props} />
  )
}
