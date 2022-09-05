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
    // 点击画布单个元素的下标
    case ACTION_TYPE.CURRENT_COMPONENT:
      return {
        ...state,
        currentComponent: action.payload,
      };
    // 修改画布单个元素属性
    case ACTION_TYPE.EDIT_CURRENT_COMPONENT:
      return {
        ...state,
        components: [...action.payload],
      };

    default:
      return state;
  }
}

export { editorReducer };
export default {
  editorReducer,
};
