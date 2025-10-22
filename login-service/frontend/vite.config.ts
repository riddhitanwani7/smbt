import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/login': { target: 'http://localhost:8081', changeOrigin: true, rewrite: p => p.replace(/^\/login/, '/api/auth/login') },
      '/register': { target: 'http://localhost:8081', changeOrigin: true, rewrite: p => p.replace(/^\/register/, '/api/auth/register') },
      '/logout': { target: 'http://localhost:8081', changeOrigin: true, rewrite: p => p.replace(/^\/logout/, '/api/auth/logout') },
      '/validate-token': { target: 'http://localhost:8081', changeOrigin: true, rewrite: p => p.replace(/^\/validate-token/, '/api/auth/validate-token') },
      '/bank-config': { target: 'http://localhost:8081', changeOrigin: true, rewrite: p => p.replace(/^\/bank-config/, '/api/auth/bank-config') },
      '/user': { target: 'http://localhost:8081', changeOrigin: true, rewrite: p => p.replace(/^\/user/, '/api/auth/user') },
      '/health': { target: 'http://localhost:8081', changeOrigin: true, rewrite: p => p.replace(/^\/health/, '/api/auth/health') }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
