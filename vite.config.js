import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
const path = require('path');

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
            // input: ['resources/js/app.jsx'], // Specify the entry points...
        }),
    ],
    resolve: {
        alias: {
            '@': '/resources/js',
            ziggy: path.resolve('vendor/tightenco/ziggy/dist'),
        },
    },
    esbuild: {
        jsxInject: `import React from 'react'`,
    },
    server: {
        host: '0.0.0.0',
        hmr: {
            host: 'localhost',
            protocol: "ws",
        }
        // host: 'viralget.io'
        // host: 'localhost',
        // port: 3000,
    }
});
