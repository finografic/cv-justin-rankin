import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/cv-justin-rankin/',
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
    }),
  ],
  resolve: {
    // Single React 19 instance across any linked packages
    dedupe: ['react', 'react-dom'],
    alias: {
      'assets': resolve('src/assets'),
      'styles': resolve('src/styles'),
      '@styled-system/styles.css': resolve('styled-system/styles.css'),
      '@styled-system/css': resolve('styled-system/css'),
      '@styled-system/jsx': resolve('styled-system/jsx'),
    },
  },
});
