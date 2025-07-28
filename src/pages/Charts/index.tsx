import { useEffect, useRef, useState, lazy, Suspense } from 'react'
import { Box, Button, Stack } from '@mui/material'

import LazyWrapper from '@/components/LazyWrapper'

import AreaCharts from './AreaCharts'
const LazyBarCharts = lazy(() => import('./BarCharts'))
const LazyLineCharts = lazy(() => import('./LineCharts'))
const LazyPieCharts = lazy(() => import('./PieCharts'))

import classes from './Charts.module.css'

const sectionStyle = {
  height: 'fit-content',
  minHeight: '85vh',
  textAlign: 'center'
}

export default function ScrollSpyBlocks() {
  const [active, setActive] = useState('area')

  const sectionRefs = {
    area: useRef<HTMLDivElement>(null),
    bar: useRef<HTMLDivElement>(null),
    line: useRef<HTMLDivElement>(null),
    pie: useRef<HTMLDivElement>(null),
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id')
            // console.log(id)
            if (id) setActive(id)
          }
        })
      },
      { threshold: 0.4 }
    )

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: keyof typeof sectionRefs) => {
    sectionRefs[id].current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Sticky Bottom Buttons */}
      <Stack direction="row" spacing={2} className={classes['bottom-bar']}>
        {Object.keys(sectionRefs).map((key) => (
          <Button
            key={key}
            variant={active === key ? 'contained' : 'outlined'}
            onClick={() => scrollTo(key as keyof typeof sectionRefs)}
          >
            {key.toUpperCase()}
          </Button>
        ))}
      </Stack>

      {/* Main Content */}
      <Box sx={{ p: 4 }}>
        <Stack spacing={8}>
          <Box ref={sectionRefs.area} data-id="area" sx={sectionStyle}>
            <AreaCharts />
          </Box>
          <Box ref={sectionRefs.bar} data-id="bar" sx={sectionStyle}>
            <LazyWrapper>
              <Suspense fallback={<div>Loading Bar Charts...</div>}>
                <LazyBarCharts />
              </Suspense>
            </LazyWrapper>
          </Box>
          <Box ref={sectionRefs.line} data-id="line" sx={sectionStyle}>
            <LazyWrapper>
              <Suspense fallback={<div>Loading Line Charts...</div>}>
                <LazyLineCharts />
              </Suspense>
            </LazyWrapper>
          </Box>
          <Box ref={sectionRefs.pie} data-id="pie" sx={sectionStyle}>
            <LazyWrapper>
              <Suspense fallback={<div>Loading Pie Charts...</div>}>
                <LazyPieCharts />
              </Suspense>
            </LazyWrapper>
          </Box>
        </Stack>
      </Box>
    </>
  )
}
