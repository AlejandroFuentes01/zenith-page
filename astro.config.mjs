import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'server', // Añadido para habilitar SSR
  adapter: node({   // Añadido para el adaptador Node
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
  // Add compression
  vite: {
    build: {
      cssCodeSplit: true,
      minify: 'terser',
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