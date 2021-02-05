import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function HomeScreen({navigation}) {

  const toLibrary = () => {
		navigation.navigate('Books')
	}

  return (
    <View style={styles.container}>
        <View style={styles.icon}>
          <Image style={styles.logo} source={require('./img/logo.png')}/>
        </View>
        <View style={styles.button}>
          <Button color='#88c5cc' title="Go !" onPress={toLibrary}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 250,
    marginRight: 20,
    justifyContent: 'center'
  },
  icon: {
    backgroundColor: 'white',
    borderRadius: 5,
    width: 250,
    height: 250,
    justifyContent: 'center'
  },
  container: {
    backgroundColor: '#fce9ff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  button: {
    width: 250,
    marginTop: 100,
  }
})
