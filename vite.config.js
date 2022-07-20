import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://api.imooc-front.lgdsunday.club/',
        changeOrigin: true
      }
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
