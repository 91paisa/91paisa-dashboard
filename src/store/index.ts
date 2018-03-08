import { createStore } from 'redux'
import reducers from '../reducers'
import initialState from './initial-state'
export default createStore(
  reducers,
  initialState,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
)
