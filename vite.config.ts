import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const hash = Math.floor(Math.random() * 90000) + 10000;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './',
  resolve: {
    alias: {
      '~/': '/src/',
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `[name]` + hash + `.js`,
        chunkFileNames: `[name]` + hash + `.js`,
        assetFileNames: `[name]` + hash + `.[ext]`,
      },
    },
  },
});
