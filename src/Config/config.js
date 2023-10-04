const config = {
  apiKey: String(import.meta.env.VITE_APP_apiKey),
  authDomain: String(import.meta.env.VITE_APP_authDomain),
  projectId: String(import.meta.env.VITE_APP_projectId),
  storageBucket: String(import.meta.env.VITE_APP_storageBucket),
  messagingSenderId: String(import.meta.env.VITE_APP_messagingSenderId),
  appId: String(import.meta.env.VITE_APP_appId),
};

export default config;
