import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';


export default function BookScreen({route}) {

  const params = route.params;

  return (
    <View style={styles.basecontainer}>
      <ScrollView>
    <View style={styles.container}>
        <Image source={params.image} style={styles.image}/>
         <Text style={styles.title}>{params.title} par {params.author}</Text>
         <Text style={styles.summary}>{params.summary}</Text>
    </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 250,

  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: '#88c5cc',
    borderWidth: 2,
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    width: 350,
    paddingLeft: 20,
    paddingRight: 20
    
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: '#BCBCBC',
    fontSize: 17,

  },
  summary: {
    textAlign: 'center',
    width: 300,
    marginTop: 10,
    color: '#BCBCBC',
    fontSize: 16,

  },
  basecontainer: {
    backgroundColor: '#fce9ff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  }
})