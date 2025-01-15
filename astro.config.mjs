import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  site: 'https://zenithdev8.vercel.app',
  integrations: [tailwind()],
  // Add build optimizations
  build: {
    inlineStylesheets: 'auto',
  },
  // Add image optimization
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    domains: ['i.pinimg.com']
  },
  // Modificamos la configuración de Vite
  vite: {
    build: {
      cssCodeSplit: true,
      minify: 'esbuild', // Cambiado de 'terser' a 'esbuild'
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['nanostores']
          }
        }
      }
    },
    ssr: {
      noExternal: ['nanostores']
    }
  }
});