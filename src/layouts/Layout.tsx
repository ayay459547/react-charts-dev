import type { ReactNode } from 'react'

import classes from './Layout.module.css'

interface LayoutProps {
  header: ReactNode;
  children: ReactNode;
  footer: ReactNode;
}

export default function Layout({ header, children, footer }: LayoutProps) {
  return (
    <div className={classes.layout}>
      <header className={classes.header}>{header}</header>
      <div className={classes.content}>
        <main className={classes.main}>{children}</main>
        <footer className={classes.footer}>{footer}</footer>
      </div>
    </div>
  );
}
