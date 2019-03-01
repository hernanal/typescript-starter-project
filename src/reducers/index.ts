import enthusiasmReducer from 'reducers/enthusiasm';
import { combineReducers } from 'redux';

export default combineReducers({
  enthusiasm: enthusiasmReducer
});