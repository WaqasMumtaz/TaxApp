// In App.js in a new project
import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screens from '../Screens';

const Stack = createNativeStackNavigator();

function MainNavigation() {
  return (
      <Stack.Navigator
      screenOptions={{
      headerTitleAlign:'center'
      }}
      >
        <Stack.Screen name="List" component={Screens.Lists} />
      </Stack.Navigator>
  );
}

export default MainNavigation;