import type { ComponentProps } from 'react'
import Button from '@mui/material/Button'

// type IProps = ComponentProps<'button'>
type ButtonProps = ComponentProps<typeof Button>

interface IProps extends ButtonProps {}

export default function IButton({ children, ...props }: IProps) {
  return (
    <Button {...props}>{children}</Button>
  )
}

