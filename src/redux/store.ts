import { combineReducers, createStore } from 'redux';
import { myDataReducer } from './reducers/myData';
import { pmPageReducer } from './reducers/pmPageReducer';

const reducers = combineReducers({
  myData: myDataReducer,
  pmPage: pmPageReducer,
});
export const store = createStore(reducers);

