export enum ACTION_TYPE {
  SET_COUNT = 'SET_COUNT',
  ADD_COMPONENT = 'ADD_COMPONENT', // 画布添加组件
  CURRENT_COMPONENT = 'CURRENT_COMPONENT', // 画布点击单个元素下标
  EDIT_CURRENT_COMPONENT = 'EDIT_CURRENT_COMPONENT', // 修改元素
  OTHER = 'OTHER',
}
export interface EditorDispatchType {
  type: keyof typeof ACTION_TYPE; // 获取枚举的 value: type IValue = `${ACTION_TYPE}`
  payload: any;
}
