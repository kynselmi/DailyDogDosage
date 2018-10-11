import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import RandomScreen from './RandomScreen';
import HomeScreen from './HomeScreen';

export default createBottomTabNavigator({
  Home: HomeScreen,
  Random: RandomScreen,
});
