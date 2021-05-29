import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import HomePage from './src/pages';

export default function App() {
  return (
    <View>
      <StatusBar style="light" />
      <HomePage />
    </View>
  );
}