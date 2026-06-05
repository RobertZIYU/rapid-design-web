import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const stylekitRoot = path.resolve(__dirname, '../treasure-rapid-stylekit')

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'treasure-rapid-stylekit/dist/index.css': path.resolve(stylekitRoot, 'dist/index.css'),
      'treasure-rapid-stylekit': path.resolve(stylekitRoot, 'src/index.ts'),
    },
  },
})
