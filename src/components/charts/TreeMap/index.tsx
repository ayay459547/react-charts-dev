import { Treemap, ResponsiveContainer } from 'recharts'

import Card from '@/components/surfaces/Card'
import useResizeObserver from '@/hooks/useResizeObserver'

import CustomizedContent from './CustomizedContent'

interface TreeMapProps {
  title?: string,
  data: any[],
  dataKey: string,
  colors: string[],
  stroke?: string,
  fill?: string,
  isAnimationActive?: boolean,
  width?: number,
  height?: number
}

export default function ITreeMap({
  title,
  data = [],
  dataKey,
  colors = [],
  stroke = '#fff',
  fill = '#8884d8',
  isAnimationActive = false,
  width,
  height
}: TreeMapProps) {
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
          <Treemap
            width={width ?? size.width}
            height={height ?? size.height}
            data={data}
            dataKey={dataKey}
            stroke={stroke}
            fill={fill}
            content={<CustomizedContent colors={colors} />}
            isAnimationActive={isAnimationActive}
          />
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
