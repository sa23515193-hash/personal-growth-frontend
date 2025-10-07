import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚙️ Change "personal-growth-frontend" to your exact repo name
export default defineConfig({
  plugins: [react()],
  base: '/personal-growth-frontend/', // 👈 ye line 100% zaruri hai
})

