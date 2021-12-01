import { IHomeState } from '@/typings';
import { createStore } from 'vuex'

import home from './home';

export interface IGlobalState {
  home: IHomeState
}

// 合并模块
export default createStore<IGlobalState>({
  modules: {
    home
  }
})
