import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import VideoDetails from '../screens/VideoDetails';
type Props = {}
const Stack = createNativeStackNavigator();
const Route = (props: Props) => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
      <Stack.Screen name='Details' component={VideoDetails} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default Route
