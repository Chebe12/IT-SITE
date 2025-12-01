import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, (process as any).cwd(), '');

  return {
    plugins: [react()],
    resolve: {
      alias: {
        // Ensure imports resolve correctly
        '@': '/src',
      },
    },
    server: {
      port: 5173,
      open: true, // Automatically open the browser
    },
    define: {
      // Polyfill process.env.API_KEY for the application code so it works in the browser
      'process.env.API_KEY': JSON.stringify(env.API_KEY || env.VITE_API_KEY || '')
    }
  };
});