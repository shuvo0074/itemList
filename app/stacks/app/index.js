import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from './screens/Home';

const Stack = createStackNavigator();

const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{title: '', headerShown: false}}
    />
  </Stack.Navigator>
);

export default AppStack;
