import type { ComponentProps } from 'react'
// import Input from '@mui/material/Input'
import TextField from '@mui/material/TextField'

interface IProps extends ComponentProps<typeof TextField> {}

export default function IInput({ ...props }: IProps) {
  return (
    <TextField {...props}></TextField>
  )
}

