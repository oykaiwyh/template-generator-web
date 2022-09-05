export enum ACTION_TYPE {
  SET_COUNT = 'SET_COUNT',
  ADD_COMPONENT = 'ADD_COMPONENT', // 画布添加组件
  CURRENT_COMPONENT = 'CURRENT_COMPONENT', // 画布点击单个元素下标
  OTHER = 'OTHER',
}
export interface EditorDispatchType {
  type: 'SET_COUNT' | 'ADD_COMPONENT' | 'OTHER' | 'CURRENT_COMPONENT';
  payload: any;
}
