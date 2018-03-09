import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'
import initialState from './initial-state'

const middleware = [thunk]
const enhancers: any = []
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export default createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware), ...enhancers),
)
