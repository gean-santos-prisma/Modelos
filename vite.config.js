import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Raiz do projeto = raiz do repo. O index.html mora aqui.
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        // Home (página principal)
        main: resolve(__dirname, 'index.html'),
        // Demais páginas
        sumario: resolve(__dirname, 'pages/sumario.html'),
        centralResultadosV1: resolve(__dirname, 'pages/central-resultados-v1.html'),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: { api: 'modern-compiler' },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
