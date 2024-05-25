import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Route from './src/navigation/Route';
type Props = {}

const App = (props: Props) => {
  return (
    <NavigationContainer>
      <Route/>
    </NavigationContainer>
  )
}
export default App