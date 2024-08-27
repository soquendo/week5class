import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScannerScreen from './ScannerScreen';  // Updated import

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Scanner" component={ScannerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;