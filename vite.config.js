import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.html'],
  server: {
    port: 5173,
    strictPort: false,
    host: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
