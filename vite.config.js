import { defineConfig } from 'vite'
import { copyFileSync, mkdirSync } from 'fs'
import { resolve } from 'path'

export default defineConfig({
  root: '.',
  publicDir: 'assets',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html'
      },
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    },
    copyPublicDir: true
  },
  server: {
    port: 3000,
    open: true
  },
  plugins: [
    {
      name: 'copy-files',
      closeBundle() {
        // Copiar archivos JS y CSS manualmente
        try {
          mkdirSync('dist/js', { recursive: true })
          mkdirSync('dist/css', { recursive: true })
          copyFileSync('js/config.js', 'dist/js/config.js')
          copyFileSync('js/main.js', 'dist/js/main.js')
          copyFileSync('css/styles.css', 'dist/css/styles.css')
          console.log('✓ Archivos JS y CSS copiados correctamente')
        } catch (err) {
          console.error('Error copiando archivos:', err)
        }
      }
    }
  ]
})
