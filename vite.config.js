import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// base is set to the GitHub Pages repo name so assets resolve correctly
// at https://<username>.github.io/Portfolio/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/Portfolio/',
})
