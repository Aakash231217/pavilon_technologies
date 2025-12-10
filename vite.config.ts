// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // This tells the server to listen on the IPv4 loopback address
    host: '127.0.0.1', 
    port: 5173, // Optional, since 5173 is the default
  },
});