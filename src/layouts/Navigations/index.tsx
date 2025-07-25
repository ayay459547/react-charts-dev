import type { SyntheticEvent } from 'react'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import BottomNavigation from '@/components/inputs/BottomNavigation'
import BottomNavigationAction from '@/components/inputs/BottomNavigationAction'

import InsertChart from '@mui/icons-material/InsertChart'
import GridView from '@mui/icons-material/GridView'
import MonetizationOn from '@mui/icons-material/MonetizationOn'

import { PATHS } from '@/routes/router'

export default function Navigations () {
  const location = useLocation()
  const navigate = useNavigate()

  const [value, setValue] = useState(-1)
  function handleChange(_event: SyntheticEvent, newValue: any) {
    setValue(newValue)
    navigate(PATHS[newValue])
  }

  // 根據當前路由設定對應的 tab index
  useEffect(() => {
    const index = PATHS.findIndex(path => location.pathname.startsWith(path))
    if (index !== -1) {
      setValue(index)
    }
  }, [location.pathname])

  return (
    <nav>
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction label="Charts" icon={<InsertChart />} />
        <BottomNavigationAction label="Blocks" icon={<GridView />} />
        <BottomNavigationAction label="Pricing" icon={<MonetizationOn />} />
      </BottomNavigation>
    </nav>
  )
}