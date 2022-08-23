import { legacy_createStore as createStore } from 'redux';
import { allReducer } from './reducer';

const store = createStore(allReducer);

export type Dispatch = typeof store.dispatch; // dispatch 类型格式

export type RootState = ReturnType<typeof store.getState>; // ReturnType返回store的数据类型

export default store;
