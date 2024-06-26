import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/server.ts'],  // Ajuste conforme necessário
  outDir: 'dist',
  format: ['esm', 'cjs'],
  splitting: false,
  sourcemap: true,
  clean: true,  // Limpa a pasta de saída antes de cada build
});
