export enum ACTION_TYPE {
  SET_COUNT = 'SET_COUNT',
  ADD_COMPONENT = 'ADD_COMPONENT', // 画布添加组件
  OTHER = 'OTHER',
}

export interface EditorDispatchType {
  type: 'SET_COUNT' | 'ADD_COMPONENT' | 'OTHER';
  payload: any;
}
