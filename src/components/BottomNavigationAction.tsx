import type { ComponentProps } from 'react'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'

interface IProps extends ComponentProps<typeof BottomNavigationAction> {}

export default function IButton({ children, ...props }: IProps) {
  return (
    <BottomNavigationAction {...props}>{children}</BottomNavigationAction>
  )
}

