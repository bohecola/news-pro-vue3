import { NAV_TYPES } from "@/typings";
import { IHomeState, INewsList } from "@/typings/store";

const state: IHomeState = {
  currentType: NAV_TYPES.TOP,
  newsList: <INewsList>{
    hasMore: true,
    isLoading: false,
    pageNum: 0,
    count: 10,
    news: []
  }
}

export default state;