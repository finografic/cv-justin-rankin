import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import type { IncomingMessage, ServerResponse } from 'node:http';
import type { Plugin } from 'vite';

const BASE_PATH = '/cv-justin-rankin/';

/** Dev/preview: redirect /cv-justin-rankin → /cv-justin-rankin/ (GitHub Pages does this in production). */
function basePathTrailingSlashRedirect(): Plugin {
  const redirect = (req: IncomingMessage, res: ServerResponse, next: () => void): void => {
    const url = req.url ?? '';
    const pathname = url.split('?')[0] ?? '';

    if (pathname === BASE_PATH.slice(0, -1)) {
      const query = url.includes('?') ? url.slice(url.indexOf('?')) : '';
      res.writeHead(301, { Location: `${BASE_PATH}${query}` });
      res.end();
      return;
    }

    next();
  };

  return {
    name: 'base-path-trailing-slash-redirect',
    configureServer(server) {
      server.middlewares.use(redirect);
    },
    configurePreviewServer(server) {
      server.middlewares.use(redirect);
    },
  };
}

export default defineConfig({
  base: BASE_PATH,
  plugins: [
    basePathTrailingSlashRedirect(),
    react({
      jsxImportSource: '@emotion/react',
    }),
  ],
  resolve: {
    // Single React 19 instance across any linked packages
    dedupe: ['react', 'react-dom'],
    // Mirror tsconfig paths — Vite does not read paths from tsconfig.json
    alias: {
      'assets': resolve('src/assets'),
      'components': resolve('src/components'),
      'data': resolve('src/data'),
      'layout': resolve('src/layout'),
      'styles': resolve('src/styles'),
      'types': resolve('src/types'),
      'utils': resolve('src/utils'),
      '@styled-system/styles.css': resolve('styled-system/styles.css'),
      '@styled-system/css': resolve('styled-system/css'),
      '@styled-system/jsx': resolve('styled-system/jsx'),
    },
  },
});
