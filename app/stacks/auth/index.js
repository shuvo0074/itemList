import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from './screens/Login';
import Signup from './screens/Signup';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={Login}
      options={{title: '', headerShown: false}}
    />
    <Stack.Screen
      name="Signup"
      component={Signup}
      options={{title: '', headerShown: false}}
    />
  </Stack.Navigator>
);

export default AuthStack;
