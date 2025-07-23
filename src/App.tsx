import './App.css'

import Layout from '@/layouts/Layout'
import Header from '@/layouts/Header'
import Content from '@/layouts/Content'

function App() {
  return (
    <Layout header={<Header />}>
      <Content />
    </Layout>
  )
}

export default App
