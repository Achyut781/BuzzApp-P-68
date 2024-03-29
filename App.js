import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TransactionScreen from './screens/FacebookScreen.js'
import SearchScreen from './screens/InstagramScreen.js'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component{
  render(){
  return (
   <AppContainer></AppContainer> 
  );
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook:{screen:FacebookScreen},
  Instagram:{screen:InstagramScreen}
})

const AppContainer = createAppContainer(
  TabNavigator
)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
