import type { ReactNode } from 'react'

import classes from './Layout.module.css'

interface LayoutProps {
  header: ReactNode;
  children: ReactNode;
}

export default function Layout({ header, children }: LayoutProps) {
  return (
    <div className={classes.layout}>
      <header className={classes.header}>{header}</header>
      <main className={classes.main}>{children}</main>
    </div>
  );
}
