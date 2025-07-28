import type { ReactNode } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

import Card from '@/components/surfaces/Card'
// import CardContent from '@/components/surfaces/CardContent'
import useResizeObserver from '@/hooks/useResizeObserver'

type CartesianLayout = 'horizontal' | 'vertical';
type AxisDomainType = 'number' | 'category';
interface LineChartProps {
  children?: ReactNode,
  title?: string,
  data: any[],
  layout?: CartesianLayout,
  strokeDasharray?: string,
  XAxisKey?: string,
  XAxisType?: AxisDomainType,
  YAxisKey?: string,
  YAxisType?: AxisDomainType,
  LineList: {
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
  children,
  title,
  data = [],
  layout,
  strokeDasharray = '5 5',
  XAxisKey,
  XAxisType,
  YAxisKey,
  YAxisType,
  LineList = [],
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
          <LineChart
            width={width ?? size.width}
            height={height ?? size.height}
            data={data}
            layout={layout}
            margin={{
              top: 20,
              right: 60,
              left: 20,
              bottom: 20,
              ...margin
            }}
          >
            <CartesianGrid strokeDasharray={strokeDasharray} />
            <XAxis dataKey={XAxisKey} type={XAxisType} />
            <YAxis dataKey={YAxisKey} type={YAxisType} />
            <Tooltip />
            <Legend />
            {LineList.map(line => {
              return (
                <Line {...line} key={line.key} />
              )
            })}
            {children}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
