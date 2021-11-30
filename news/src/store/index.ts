import { IHomeState } from '@/typings';
import { createStore } from 'vuex'

import home from './home';

export interface IGlobalState {
  home: IHomeState
}

export default createStore<IGlobalState>({
  modules: {
    home
  }
})
