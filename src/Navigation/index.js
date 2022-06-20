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
      headerTitleAlign:'center',
      headerStyle:{
         shadowColor: 'transparent', // this covers iOS
        elevation: 0, // this covers Android
      }
    }
    }
      >
        <Stack.Screen name="Cases" component={Screens.Lists} />
        <Stack.Screen name="Details" component={Screens.Details} />

      </Stack.Navigator>
  );
}

export default MainNavigation;