import { AppRegistry, Platform } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { createRoot } from 'react-dom/client'; // React 18+ for web rendering

if (Platform.OS === 'web') {
  const rootElement = document.getElementById('root');
  ReactDOM.render(<App />, rootElement);
} else {
  AppRegistry.registerComponent(appName, () => App);
  AppRegistry.runApplication(appName, {
    initialProps: {},
    rootTag: document.getElementById('root'),
  });
}
