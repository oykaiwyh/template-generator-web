import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useRef } from 'react';
import { Dispatch, RootState } from '@/redux';
import { baseAttributeTrees } from './const';
import { checkIsNull } from '@/utils';
import { ITextCompProps, TCssProperties } from './interface';

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
  const Dispatch: Dispatch = useDispatch();
  // const cacheRef = useRef<any>();
  const cacheCountRef = useRef<number>(0);

  // if (cacheRef.current) {
  //   cacheRef.current[0].value = Math.random() * 10;
  // }

  const state = checkIsNull(currentComponent)
    ? components[currentComponent as number]
    : null;

  const handleEditComponentsAttr = useCallback(
    ({ attribute, value }: { attribute: TCssProperties; value: string }) => {
      const newComps: ITextCompProps[] = JSON.parse(JSON.stringify(components));
      newComps[currentComponent || 0].props[attribute as 'text'] = value;
      Dispatch({
        type: 'EDIT_CURRENT_COMPONENT',
        payload: newComps,
      });
    },
    [Dispatch, components, currentComponent]
  );

  const showBaseAttributeTrees = baseAttributeTrees.map((attr) => ({
    ...attr,
    value: state ? state.props[attr.attribute] : null,
  }));

  // if (cacheCountRef.current === 0) {
  //   cacheRef.current = showBaseAttributeTrees;
  //   (window as any).testValue = cacheRef.current;
  // }
  cacheCountRef.current += 1;
  return {
    // showBaseAttributeTrees: cacheRef.current
    //   ? cacheCountRef.current
    //   : showBaseAttributeTrees,
    showBaseAttributeTrees,
    Dispatch,
    handleEditComponentsAttr,
  };
};

export { useGetEditorState, useGetCurrentComponentAttr };

export default {};
