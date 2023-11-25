import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'supercar.app',
  appName: 'SuperCar',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
