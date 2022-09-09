import { combineReducers } from 'redux';
// import { combineReducers } from 'redux-immutable';
import { editorReducer } from './editor';

const allReducer = combineReducers({
  editorReducer,
});

export { allReducer };

export default {
  allReducer,
};
