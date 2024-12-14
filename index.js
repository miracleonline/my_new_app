import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { render } from 'react-dom';

// For React Native Web
import { Platform } from 'react-native';
import { createRoot } from 'react-dom/client';

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root');
  const root = createRoot(rootTag);
  root.render(<App />);
} else {
  AppRegistry.registerComponent(appName, () => App);
  AppRegistry.runApplication(appName, {
    initialProps: {},
    rootTag: document.getElementById('root'),
  });
}
