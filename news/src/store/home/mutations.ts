import { IHomeState, IRetNewsData } from '@/typings';
import * as actionTypes from './actionTypes'; 

export default {
  [actionTypes.SET_LOADING] (state: IHomeState, isLoading: boolean) {
    state.newsList.isLoading = isLoading;
  },
  [actionTypes.SET_NEWS_LIST] (state: IHomeState, payload: IRetNewsData) {
    if (payload.hasMore) {
      state.newsList.news = [...state.newsList.news, ...payload.data!];
      state.newsList.pageNum += 1;
    }
    state.newsList.hasMore = payload.hasMore;
    state.newsList.isLoading = false;
  }
}