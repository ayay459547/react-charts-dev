import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

import Card from '@/components/surfaces/Card'
// import useResizeObserver from '@/hooks/useResizeObserver'

interface RadarChartProps {
  title?: string,
  data: any[],
  PolarAngleAxisKey: string,
  RadarList: {
    key: string,
    [key: string]: any
  }[]
}

export default function IRadarChart({
  title,
  data = [],
  PolarAngleAxisKey,
  RadarList = []
}: RadarChartProps) {
  // const { ref, size } = useResizeObserver<HTMLDivElement>()
  // console.log({...size})
  const titleHeight = '40px'

  return (
    <Card className='fill'>
      <div style={{ height: titleHeight, lineHeight: titleHeight }}>
        {title && <h3>{title}</h3>}
      </div>
      <div style={{ height: `calc(100% - ${titleHeight})` }}>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="80%"
            data={data}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey={PolarAngleAxisKey} />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            {RadarList.map(radar => {
              return (
                <Radar {...radar} key={radar.key} />
              )
            })}
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
