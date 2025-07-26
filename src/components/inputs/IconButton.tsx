import type { ComponentProps } from 'react'
import IconButton from '@mui/material/IconButton'

interface IProps extends ComponentProps<typeof IconButton> {}

export default function IIconButton({ children, ...props }: IProps) {
  return (
    <IconButton {...props}>{children}</IconButton>
  )
}

