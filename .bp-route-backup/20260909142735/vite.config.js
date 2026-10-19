import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
var vdev2Proxy = {
    target: 'http://127.0.0.1:9091',
    changeOrigin: false,
    secure: false,
};
export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,
        strictPort: true,
        proxy: {
            '/api/vdev2': vdev2Proxy,
        },
    },
    preview: {
        host: '0.0.0.0',
        allowedHosts: ['telemedicine-front-production.up.railway.app'],
        proxy: {
            '/api/vdev2': vdev2Proxy,
        },
    },
});
