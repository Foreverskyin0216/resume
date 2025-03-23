import Vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    preprocessorOptions: {
      sass: { api: 'modern-compiler' }
    }
  },
  define: { 'process.env': {} },
  plugins: [
    Vue({ template: { transformAssetUrls } }),
    Vuetify({ autoImport: false, styles: { configFile: 'src/styles.scss' } })
  ],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
    extensions: ['.js', '.json', '.ts', '.vue']
  },
  server: { port: 3000 }
})
