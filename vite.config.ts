import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages configuration - set base to your repository name
  // Change 'Shan-Sai-Bouqet' to your actual repository name if different
  base: '/Shan-Sai-Bouqet/',
})
