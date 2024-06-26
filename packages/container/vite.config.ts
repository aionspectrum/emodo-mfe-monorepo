import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'container',
      remotes: {
        auth: 'http://localhost:8081/assets/remoteEntry.js',
        ui: 'http://localhost:8008/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'react-router-dom', 'styled-components'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
