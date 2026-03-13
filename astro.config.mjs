import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
        server: {
            allowedHosts: [
                "devserver-preview--stately-dragon-27a993.netlify.app",
                ".netlify.app"
            ]
        },
        preview: {
            allowedHosts: [
                "devserver-preview--stately-dragon-27a993.netlify.app",
                ".netlify.app"
            ]
        }
    },
    integrations: [react()],
    adapter: netlify({
        devFeatures: {
            environmentVariables: true
        }
    })
});
