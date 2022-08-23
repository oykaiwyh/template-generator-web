import { combineReducers } from 'redux';
import { editorReducer } from './editor';

const allReducer = combineReducers({
  editorReducer,
});

export { allReducer };

export default {
  allReducer,
};
