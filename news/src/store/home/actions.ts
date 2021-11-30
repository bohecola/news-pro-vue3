import { IPostData, INewsInfo, IHomeState } from '@/typings';
import { Commit } from 'vuex';
import * as actionTypes from './actionTypes'; 
import { getNewsList } from '@/services';

 export default {
  [actionTypes.SET_NEWS_LIST] ({ commit, state }: { commit: Commit, state: IHomeState }, options: IPostData) {

    if (state.newsList.isLoading) {
      return;
    }

    if (!state.newsList.hasMore) {
      return;
    }

    if (state.newsList.pageNum) {
      commit(actionTypes.SET_LOADING, true);
    }

    getNewsList<INewsInfo[]>(options).then((data) => {
      commit(actionTypes.SET_NEWS_LIST, data);
    }).catch((err) => {
      throw err;
    })
  }
 }