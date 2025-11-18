import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3006,
  },
  base: '/',
  assetsInclude: ['**/*.JPG', '**/*.JPEG'], // Add support for uppercase image extensions
  define: {
    global: 'window', // Fix for react-image-lightbox
  },
})
