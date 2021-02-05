import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LibraryScreen from './screens/LibraryScreen';
import BookScreen from './screens/BookScreen';


export default function App() {

  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
		  <Stack.Navigator initialRouteName="Home">
			  <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Books" component={LibraryScreen}/>
			  <Stack.Screen name="Details" component={BookScreen}/>
		  </Stack.Navigator>
	  </NavigationContainer>
  );
}

