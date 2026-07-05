import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 部署到 GitHub Pages 時，這裡要改成 '/您的Repository名稱/'
  // 例如：如果您的 repo 叫 'portfolio'，這裡就填 '/portfolio/'
  base: '/YuchiChang-Portfolio/', 
})