import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { render } from 'react-dom';

const rootTag = document.getElementById('root');
if (rootTag) {
  render(<App />, rootTag); // For web
} else {
  AppRegistry.registerComponent(appName, () => App); // For mobile
}
