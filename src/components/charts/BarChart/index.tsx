// import { useEffect, useRef } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

import Card from '@/components/surfaces/Card'
// import CardContent from '@/components/surfaces/CardContent'
import useResizeObserver from '@/hooks/useResizeObserver'

interface LineChartProps {
  title?: string,
  data: any[],
  strokeDasharray?: string,
  XAxisKey: string,
  BarList: {
    key: string,
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

export default function ILineChart({
  title,
  data = [],
  strokeDasharray = '5 5',
  XAxisKey = 'name',
  BarList = [],
  margin = {},
  width,
  height
}: LineChartProps) {
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
          <BarChart
            width={width ?? size.width}
            height={height ?? size.height}
            data={data}
            margin={{
              top: 20,
              right: 60,
              left: 20,
              bottom: 20,
              ...margin
            }}
          >
            <CartesianGrid strokeDasharray={strokeDasharray} />
            <XAxis dataKey={XAxisKey} />
            <YAxis />
            <Tooltip />
            <Legend />
            {BarList.map(line => {
              return (
                <Bar {...line} key={line.key} />
              )
            })}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
