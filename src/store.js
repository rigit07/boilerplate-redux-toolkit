import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterReducer'
import multipleReducer from './reducers/multipleReducer'
import generalReducer from './reducers/generalReducer'

const Store_1 = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

const Store_2 = configureStore({
  reducer: {
    counter: multipleReducer
  },
})

const Store_3 = configureStore({
  reducer: {
    general: generalReducer
  },
})

export {Store_1, Store_2, Store_3};