// // vite.config.js
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'icons/logo-192x192.png'],
      manifest: {
        name: 'Muskul',
        short_name: 'Muskul',
        description: 'Workout dictionary',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'icons/logo-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/logo-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
})
