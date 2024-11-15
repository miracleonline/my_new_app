import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper'; // Import Provider from React Native Paper
import SignUp from './src/components/SignUp';
import Login from './src/components/Login'; 
import Dashboard from './src/components/Dashboard';
import LocationShare from './src/components/LocationShare';
import YouTubePlayer from './src/components/YouTubePlayer';

const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignUp">
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Share Location" component={LocationShare} />
          <Stack.Screen name="Watch Video" component={YouTubePlayer} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
