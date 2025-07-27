import type { ReactNode } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import viteLogo from '/vite.svg'
// import reactLogo from '@/assets/react.svg'
import Button from '@/components/inputs/Button'

import classes from './Header.module.css'

interface HeaderProps {
  children: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  const navigate = useNavigate()

  return (
    <>
      <Link to="/" className={classes['logo-area']}>
        <img src={viteLogo} className={classes.logo} alt="Vite logo" />
        <h1 className={classes.title}>Charts</h1>
      </Link>

      {children}

      <div className={classes['sign-in']}>
        {/* <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className={`${classes.logo} ${classes.react}`} alt="React logo" />
        </a> */}
        <Button onClick={() => navigate('/sign-in')}>SignIn</Button>
      </div>
    </>
  )
}