import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.bunHono.myApp',
  appName: 'bun-hono-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
