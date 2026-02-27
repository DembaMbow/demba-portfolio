import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Hash automatique pour un cache navigateur optimal
        manualChunks: {
          vendor:  ['react', 'react-dom'],
          i18n:    ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
          emailjs: ['@emailjs/browser'],
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
})
