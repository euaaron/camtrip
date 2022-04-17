import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.aaroncarneiro.camtrip',
  appName: 'camtrip',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
      launchAutoHide: true,
    },
  }
};

export default config;

// remove server.url and server.cleartext before building for production
// ,
//   server: {
//     url: 'http://localhost:3000',
//     cleartext: true,
//   }