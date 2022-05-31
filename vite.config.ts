import { resolve, basename } from 'path';
import { defineConfig, UserConfigFn, ResolveOptions, AliasOptions, BuildOptions, DepOptimizationOptions } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        banner: `/*!\nMayLib\n*/`
      }
    },
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'mylib',
    },
  }
})
