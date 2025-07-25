// import { useEffect, useRef } from 'react'
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

import Card from '@/components/surfaces/Card'
// import CardContent from '@/components/surfaces/CardContent'
import useResizeObserver from '@/hooks/useResizeObserver'

interface PieChartProps {
  title?: string,
  PieList: {
    key: string,
    data: any[],
    dataKey: string,
    [key: string]: any
  }[],
  margin?: {
    top?: number,
    right?: number,
    left?: number,
    bottom?: number
  },
  width?: number,
  height?: number
}

export default function IPieChart({
  title,
  PieList = [],
  margin = {},
  width,
  height
}: PieChartProps) {
  const { ref, size } = useResizeObserver<HTMLDivElement>()
  // console.log({...size})
  const titleHeight = '40px'
  
  return (
    <Card className='fill'>
      <div style={{ height: titleHeight, lineHeight: titleHeight }}>
        {title && <h3>{title}</h3>}
      </div>
      <div ref={ref} style={{ height: `calc(100% - ${titleHeight})` }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart
            width={width ?? size.width}
            height={height ?? size.height}
            margin={{
              top: -20,
              right: 0,
              left: 0,
              bottom: 0,
              ...margin
            }}
          >
            <Tooltip />
            {PieList.map(pie => {
              return (
                <Pie {...pie} key={pie.key} />
              )
            })}
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
