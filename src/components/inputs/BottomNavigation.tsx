import type { ComponentProps } from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'

interface IProps extends ComponentProps<typeof BottomNavigation> {}

export default function IBottomNavigation({ children, ...props }: IProps) {
  return (
    <BottomNavigation {...props}>{children}</BottomNavigation>
  )
}
