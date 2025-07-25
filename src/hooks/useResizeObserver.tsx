import { useEffect, useRef, useState } from 'react'
import throttle from 'lodash.throttle'

export default function useResizeObserver<T extends HTMLElement>(delay = 100) {
  const ref = useRef<T>(null)
  const [size, setSize] = useState({ width: 0, height: 0 })

  const throttledSetSize = useRef(
    throttle((width: number, height: number) => {
      setSize({ width, height })
    }, delay)
  ).current

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect
        throttledSetSize(width, height)
      }
    })

    observer.observe(element)
    return () => {
      observer.disconnect()
      throttledSetSize.cancel() // 清除節流
    }
  }, [throttledSetSize])

  return { ref, size }
}
