import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../screens/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export type AppStackParamList = {
    Home: undefined,
}

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerBackTitleVisible:false,headerTitleAlign:'center'}} >
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})

export default AppStack