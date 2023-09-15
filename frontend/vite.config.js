import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://brandonlee3241.github.io/Library/',
  plugins: [react()],
})
