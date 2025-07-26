import { useState } from 'react'

import Login from '@mui/icons-material/Login'
import GitHub from '@mui/icons-material/GitHub'
import Google from '@mui/icons-material/Google'
import Facebook from '@mui/icons-material/Facebook'

import Card from '@/components/surfaces/Card'
import CardHeader from '@/components/surfaces/CardHeader'
import CardContent from '@/components/surfaces/CardContent'
import Button from '@/components/inputs/Button'
import IconButton from '@/components/inputs/IconButton'
import Input from '@/components/inputs/Input'

import classes from './SignIn.module.css'

export default function SignIn() {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  
  return (
   <div className={classes.container}>
      <Card className={classes.card}>
        <CardHeader
          className={classes.header}
          title="Welcome back"
          subheader="Sign in to continue to your account"
        />
        <CardContent className={classes.login}>
          <Input
            label="Account"
            id="outlined-required"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
          />
          <Input
            label="Password"
            id="outlined-required"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            startIcon={<Login />}
            variant="outlined"
            size="large"
          >
            Sign In
          </Button>
        </CardContent>

        <CardContent className={classes.footer}>
          <div className={classes.btns}>
            <IconButton size="large">
              <GitHub />
            </IconButton>
            <IconButton size="large">
              <Google />
            </IconButton>
            <IconButton size="large">
              <Facebook />
            </IconButton>
          </div>
          <p>By continuing, you agree to our Terms of Service and Privacy Policy</p>
        </CardContent>
      </Card>
    </div>
  )
}