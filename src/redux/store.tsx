import { configureStore,combineReducers } from '@reduxjs/toolkit'
import videoReducers from './reducers/videoReducers'
const rootReducers = combineReducers({
    videos:videoReducers
})

export const store = configureStore({
    reducer: {
      reducers:rootReducers
    }
  })