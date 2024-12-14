import { AppRegistry } from 'react-native';
import App from './App'; // Your main App component
import { name as appName } from './app.json';
import { createRoot } from 'react-dom/client';

// Get the root element for the web
const rootTag = document.getElementById('root');

// If running on the web, use React DOM
if (rootTag) {
  const root = createRoot(rootTag); // React 18+
  root.render(<App />);
} else {
  // For native platforms, use AppRegistry
  AppRegistry.registerComponent(appName, () => App);
}
