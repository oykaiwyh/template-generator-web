import { useSelector } from 'react-redux';
import { RootState } from '@/redux';
import { baseAttributeTrees } from './const';
import { checkIsNull } from '@/utils';

// editor global
const useGetEditorState = () => {
  const editorState = useSelector((state: RootState) => ({
    components: state.editorReducer.components,
    currentComponent: state.editorReducer.currentComponent,
  }));

  return {
    ...editorState,
  };
};

// editor left

const useGetCurrentComponentAttr = () => {
  const { components, currentComponent } = useGetEditorState();

  const state = checkIsNull(currentComponent)
    ? components[currentComponent as number]
    : null;

  const showBaseAttributeTrees = baseAttributeTrees.map((attr) => ({
    ...attr,
    value: state ? state.props[attr.attribute] : null,
  }));

  return showBaseAttributeTrees;
};

export { useGetEditorState, useGetCurrentComponentAttr };

export default {};
