import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/Counterslice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})