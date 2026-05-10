import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Enable source maps only in development
    sourcemap: false,
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor'
            }
            if (id.includes('react-router')) {
              return 'router'
            }
            if (id.includes('chart.js') || id.includes('react-chartjs-2')) {
              return 'charts'
            }
            if (id.includes('axios')) {
              return 'http'
            }
            return 'vendor'
          }
        }
      }
    },
    // Optimize CSS
    cssCodeSplit: true,
    // Set target for better compatibility
    target: 'esnext',
    // Enable minification
    minify: 'esbuild',
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000
  },
  // Optimize dev server
  server: {
    hmr: {
      overlay: false
    },
    host: true,
    port: 5173
  },
  // Enable CSS optimization
  css: {
    devSourcemap: false
  },
  // Performance optimizations
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
})