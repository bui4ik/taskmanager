import createSagaMiddleWare from 'redux-saga'
import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit'
import processSlice from 'store/process/slice'
import rootSaga from 'store/rootSaga'

const sagaMiddleware = createSagaMiddleWare()

const initialState = {}

const rootReducer = () =>
  combineReducers({
    process: processSlice,
  })

const middleware = [...getDefaultMiddleware(), sagaMiddleware]

export const store = configureStore({
  reducer: rootReducer(),
  preloadedState: initialState,
  middleware,
})

sagaMiddleware.run(rootSaga)

export default store
