import type { ReactNode } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import viteLogo from '/vite.svg'
import reactLogo from '@/assets/react.svg'
import Button from '@/components/Button'

import classes from './Header.module.css'

interface HeaderProps {
  children: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  const navigate = useNavigate()

  return (
    <>
      <div className={classes['logo-area']}>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className={classes.logo} alt="Vite logo" />
        </a>
        <h1 className={classes.title}>
          <Link to="/">Charts</Link>
        </h1>
      </div>

      {children}

      <div className={classes['sign-in']}>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className={`${classes.logo} ${classes.react}`} alt="React logo" />
        </a>
        <Button onClick={() => navigate('/sign-in')}>Sign In</Button>
      </div>
    </>
  )
}