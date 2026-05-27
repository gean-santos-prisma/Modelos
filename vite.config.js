import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        // Home é a página principal (index.html)
        main: resolve(__dirname, 'src/index.html'),
        // Demais páginas registradas aqui
        sumario: resolve(__dirname, 'src/pages/sumario.html'),
        centralResultadosV1: resolve(__dirname, 'src/pages/central-resultados-v1.html'),
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
