import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from './screens/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { hasDrawer } from '../../../app.json';

const Nav = hasDrawer ? createDrawerNavigator() : createStackNavigator();

const AppStack = () => (
  <Nav.Navigator>
    <Nav.Screen
      name="Home"
      component={Home}
      options={{ title: 'Home', headerShown: false }}
    />
    <Nav.Screen
      name="Profile"
      component={Home}
      options={{ title: 'Profile', headerShown: false }}
    />
  </Nav.Navigator>
);

export default AppStack;
