import createSagaMiddleWare from 'redux-saga'
import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit'

const sagaMiddleware = createSagaMiddleWare()

const initialState = {}

const rootReducer = () => combineReducers({})

const middleware = [...getDefaultMiddleware(), sagaMiddleware]

export const store = configureStore({
  reducer: rootReducer(),
  preloadedState: initialState,
  middleware,
})

export default store
