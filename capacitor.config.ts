import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ifts.wikiMovies',
  appName: 'wikiMovies',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
