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
  // const [initCompponents, setInit] = useState<any>();
  // useEffect(() => {
  //   setInit(components);
  // }, [components]);

  // XXX: 需要对components进行缓存。奇怪useCallback，依赖数组components变化后，函数内部使用依赖的数据还是第一次初始化的值？？？
  // 但是如果拿currentComponent却是最新的，不知道是不是redux自定义hook-useSelector的问题？
  // 使用useState进行状态的使用（line24-27，65），在useCallback还是不能拿到最新的值
  const cacheComponentsData = useRef<any>();

  const Dispatch: Dispatch = useDispatch();
  // const cacheRef = useRef<any>();
  const cacheCountRef = useRef<number>(0);

  // if (cacheRef.current) {
  //   cacheRef.current[0].value = Math.random() * 10;
  // }

  const state = checkIsNull(currentComponent)
    ? components[currentComponent as number]
    : null;

  // 获取components的最新数据
  cacheComponentsData.current = components;

  const handleEditComponentsAttr = useCallback(
    ({ attribute, value }: { attribute: TCssProperties; value: string }) => {
      const newComps: ITextCompProps[] = JSON.parse(
        JSON.stringify(cacheComponentsData.current)
      );
      if (!checkIsNull(currentComponent)) {
        return;
      }
      newComps[currentComponent].props[attribute as 'text'] = value;

      Dispatch({
        type: 'EDIT_CURRENT_COMPONENT',
        payload: newComps,
      });
    },
    [Dispatch, currentComponent]
    // [Dispatch, components, currentComponent]
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
