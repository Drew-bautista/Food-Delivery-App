import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';

import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), legacy()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
