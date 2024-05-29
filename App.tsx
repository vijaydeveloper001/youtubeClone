import "react-native-gesture-handler";
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Route from './src/navigation/Route';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ToastMessage from "./src/components/ToastMessage";
type Props = {};

const App = (props: Props) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer>
          <Route />
          <ToastMessage/>
        </NavigationContainer>
      </Provider>
      </GestureHandlerRootView>
    
  );
};
export default App;
