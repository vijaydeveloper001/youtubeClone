import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './src/screens/Home'

type Props = {}

const App = (props: Props) => {
  return (
    <View style = {styles.Main}>
      <Home/>
    </View>
  )
}
export default App

const styles = StyleSheet.create({
  Main:{
    flex:1
  }
})