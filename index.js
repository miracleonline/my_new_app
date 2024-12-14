import { AppRegistry, Platform } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { createRoot } from 'react-dom/client'; // React 18+ for web rendering

if (Platform.OS === 'web') {
  // Render for Web
  const rootElement = document.getElementById('root');
  const root = createRoot(rootElement); // React 18+ API
  root.render(<App />);
} else {
  // Render for Native
  AppRegistry.registerComponent(appName, () => App);
  AppRegistry.runApplication(appName, {
    initialProps: {},
    rootTag: document.getElementById('root'),
  });
}
