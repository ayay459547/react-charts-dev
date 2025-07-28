import type { ReactNode } from 'react'
// import type { TooltipProps } from 'recharts'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

import Card from '@/components/surfaces/Card'
// import CardContent from '@/components/surfaces/CardContent'
import useResizeObserver from '@/hooks/useResizeObserver'

type StackOffsetType = 'sign' | 'expand' | 'none' | 'wiggle' | 'silhouette' | 'positive';

interface AreaChartProps {
  children?: ReactNode
  title?: string,
  data: any[],
  strokeDasharray?: string,
  XAxisKey: string,
  stackOffset?: StackOffsetType,
  tickFormatter?: ((value: any, index: number) => string),
  tooltipContent?: any,
  AreaList: {
    key: string,
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

export default function IAreaChart({
  children,
  title,
  data = [],
  strokeDasharray = '5 5',
  XAxisKey = 'name',
  stackOffset,
  tickFormatter,
  tooltipContent,
  AreaList = [],
  margin = {},
  width,
  height
}: AreaChartProps) {
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
          <AreaChart
            width={width ?? size.width}
            height={height ?? size.height}
            data={data}
            stackOffset={stackOffset}
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
            <YAxis tickFormatter={tickFormatter}/>
            <Tooltip content={tooltipContent} />
            <Legend />
            {AreaList.map(area => {
              return (
                <Area {...area} key={area.key} />
              )
            })}
            {children}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
