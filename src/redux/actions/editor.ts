export enum ACTION_TYPE {
  SET_COUNT = 'SET_COUNT',
  OTHER = 'OTHER',
}

export interface EditorDispatchType {
  type: 'SET_COUNT' | 'OTHER';
  payload: any;
}
