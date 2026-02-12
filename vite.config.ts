import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      // docs app uses ~/  prefix for its own imports
      { find: /^~\//, replacement: path.resolve(__dirname, './src') + '/' },
    ],
  },
  server: {
    port: 5174,
    open: true,
  },
  build: {
    outDir: 'dist',
  },
});
