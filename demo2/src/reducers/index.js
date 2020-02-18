import { combineReducers } from 'redux'
import ListReducer from './ListReducer'
import doneBoolean from './comReducer'

const todoApp = combineReducers({
  ListReducer,
  doneBoolean
})



export default todoApp