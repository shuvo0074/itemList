import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AppStack from '../stacks/app';
import AuthStack from '../stacks/auth';
import SplashScreen from '../stacks/splash';

const Stack = createStackNavigator();

const RootStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Splash"
      component={SplashScreen}
      options={{ title: '', headerShown: false }}
    />
    <Stack.Screen
      name="AuthStack"
      component={AuthStack}
      options={{title: '', headerShown: false}}
    />
    <Stack.Screen
      name="AppStack"
      component={AppStack}
      options={{title: '', headerShown: false}}
    />
  </Stack.Navigator>
);

export default RootStack;
