import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'

const nowDate = new Date()
const [year, month, day, hour, min, second] = [
  nowDate.getFullYear(),
  `${nowDate.getMonth() + 1}`.padStart(2, '0'),
  `${nowDate.getDate()}`.padStart(2, '0'),
  `${nowDate.getHours()}`.padStart(2, '0'),
  `${nowDate.getMinutes()}`.padStart(2, '0'),
  `${nowDate.getSeconds()}`.padStart(2, '0')
]

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd()) // 載入環境變數
  const { VITE_API_SYSTEM_URL } = env


  console.log('\n ------------------------------------------------------------------------ \n')
  console.log('\x1B[33m%s\x1B[0m \x1B[36m%s\x1B[0m', '前端服務器資訊', `(執行時間: ${year}-${month}-${day} ${hour}:${min}:${second})`)
  console.table({
    '時間': `${year}-${month}-${day} ${hour}:${min}:${second}`,
    'VITE_API_SYSTEM_URL': VITE_API_SYSTEM_URL,
    '指令': command,
    '模式': mode
  })
  console.log('\x1B[43m%s\x1B[0m', '注意打包版本是否有更新')
  console.log('\n ------------------------------------------------------------------------ \n')


  return {
    base: VITE_API_SYSTEM_URL || '/',
    plugins: [react()],
    server: {
      open: true,
      port: 6060,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
