import type { ReactNode } from 'react'
import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Layout from '@/layouts/Layout'
import Header from '@/layouts/Header'
import Navigations from '@/layouts/Navigations'
import Content from '@/layouts/Content'
import Footer from '@/layouts/Footer'

import Error from '@/components/Error'
import CircularProgress from '@/components/CircularProgress'

// 懶加載 Page 元件
const Home = lazy(() => import('@/pages/Home'))
const Charts = lazy(() => import('@/pages/Charts'))
const Blocks = lazy(() => import('@/pages/Blocks'))
const Pricing = lazy(() => import('@/pages/Pricing'))
const SignIn = lazy(() => import('@/pages/SignIn'))

export const PATHS = ['/charts', '/blocks', '/pricing']

const lazyWithSuspense = (Component: React.LazyExoticComponent<() => ReactNode>) => (
  <Suspense fallback={(
    <div style={{ textAlign: 'center' }}><CircularProgress /></div>
  )}>
    <Component />
  </Suspense>
)

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout
        header={<Header><Navigations /></Header>}
        footer={<Footer />}
      >
        <Content />
      </Layout>
    ),
    errorElement: <Error />,
    children: [
      { index: true, element: lazyWithSuspense(Home) },
      { path: 'charts', element: lazyWithSuspense(Charts) },
      { path: 'blocks', element: lazyWithSuspense(Blocks) },
      { path: 'blocks/:type', element: <div>blocks</div> },
      { path: 'pricing', element: lazyWithSuspense(Pricing) },
      { path: 'sign-in', element: lazyWithSuspense(SignIn) },
    ]
  }
])
