import { combineReducers } from 'redux'
import todos from './todos.js'
import calcate from './calcate.js'
import test from './test.js'
export default combineReducers({
  todos:todos,
  calcate:calcate,
  test
})