import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from './screens/Home';
import AddProduct from './screens/AddProduct';

const Stack = createStackNavigator();

const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{title: '', headerShown: false}}
    />
    <Stack.Screen
      name="AddProduct"
      component={AddProduct}
      options={{title: '', headerShown: false}}
    />
  </Stack.Navigator>
);

export default AppStack;
