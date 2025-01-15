import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless'; // Añadir esta importación
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'server',
  adapter: vercel(), // Ahora vercel() está correctamente importado
  site: 'https://zenithdev8.vercel.app',
  integrations: [tailwind()],
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    domains: ['i.pinimg.com']
  },
  vite: {
    build: {
      cssCodeSplit: true,
      minify: 'esbuild',
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