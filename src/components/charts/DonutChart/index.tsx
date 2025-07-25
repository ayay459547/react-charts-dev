import { useEffect, useRef } from 'react'

interface Segment {
  value: number
  color: string
}

interface DonutPieChartProps {
  data: Segment[] // 各區段
  size?: number // 寬高 px
  strokeWidth?: number
  backgroundColor?: string
  centerLabel?: string
}

export default function DonutPieChart({
  data,
  size = 120,
  strokeWidth = 16,
  backgroundColor = '#e5e7eb',
  centerLabel,
}: DonutPieChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const center = size / 2
    const radius = center - strokeWidth / 2

    ctx.clearRect(0, 0, size, size)

    // 畫背景圓環
    ctx.beginPath()
    ctx.arc(center, center, radius, 0, Math.PI * 2)
    ctx.strokeStyle = backgroundColor
    ctx.lineWidth = strokeWidth
    ctx.stroke()

    const total = data.reduce((sum, seg) => sum + seg.value, 0)
    let startAngle = -Math.PI / 2

    for (const segment of data) {
      const angle = (segment.value / total) * Math.PI * 2
      const endAngle = startAngle + angle

      ctx.beginPath()
      ctx.arc(center, center, radius, startAngle, endAngle)
      ctx.strokeStyle = segment.color
      ctx.lineWidth = strokeWidth
      ctx.lineCap = 'butt'
      ctx.stroke()

      startAngle = endAngle
    }

    // 中心文字
    if (centerLabel) {
      ctx.fillStyle = '#111'
      ctx.font = 'bold 16px sans-serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(centerLabel, center, center)
    }
  }, [data, size, strokeWidth, backgroundColor, centerLabel])

  return <canvas ref={canvasRef} width={size} height={size} />
}
