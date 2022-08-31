import { initialEditorState, initialEditorStateProps } from '../state';
import { ACTION_TYPE, EditorDispatchType } from '../actions/editor';

function editorReducer(
  state = initialEditorState,
  action: EditorDispatchType
): initialEditorStateProps {
  switch (action.type) {
    case ACTION_TYPE.SET_COUNT:
      return {
        ...state,
        count: action.payload,
      };
    // 画布添加组件
    case ACTION_TYPE.ADD_COMPONENT:
      return {
        ...state,
        components: [...state.components, action.payload],
      };

    default:
      return state;
  }
}

export { editorReducer };
export default {
  editorReducer,
};