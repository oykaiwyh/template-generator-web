import { initialEditorState } from '../state';
import { ACTION_TYPE, EditorDispatchType } from '../actions/editor';

function editorReducer(state = initialEditorState, action: EditorDispatchType) {
  switch (action.type) {
    case ACTION_TYPE.SET_COUNT:
      return (state as any)
        .update('count', () => action.payload)
        .updateIn(['test', 'props', 'text'], () => action.payload);

    default:
      return state;
  }
}

export { editorReducer };
export default {
  editorReducer,
};
