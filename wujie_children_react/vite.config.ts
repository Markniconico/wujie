import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        cors: true,
        host: '0.0.0.0',
        port: 7501,
    },
    plugins: [react()],
});
