/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()], 
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), 
      '@components': path.resolve(__dirname, './src/components'), 
      '@pages': path.resolve(__dirname, './src/pages'), 
      '@layouts': path.resolve(__dirname, './src/layouts'), 
      '@icons': path.resolve(__dirname, './src/icons'), 
      '@hooks': path.resolve(__dirname, './src/hooks'), 
      '@helpers': path.resolve(__dirname, './src/helpers')
    }
  }
})