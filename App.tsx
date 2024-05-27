import "react-native-gesture-handler";
import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Route from './src/navigation/Route';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import { GestureHandlerRootView } from "react-native-gesture-handler";
type Props = {};

const App = (props: Props) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer>
          <Route />
        </NavigationContainer>
      </Provider>
      </GestureHandlerRootView>
    
  );
};
export default App;
