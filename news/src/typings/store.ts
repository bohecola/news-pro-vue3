import { NAV_TYPES } from ".";

interface INewsList {
  hasMore: boolean,
  isLoading: boolean ,
  pageNum: number,
  count: number,
  news: INewsInfo[]
}

interface INewsInfo {
  uniquekey: string,
  title: string,
  date: string,
  category: string,
  author_name: string,
  url: string,
  thumbnail_pic_s?: string,
  thumbnail_pic_s02?: string,
  thumbnail_pic_s03?: string
}

interface IHomeState {
  currentType: NAV_TYPES,
  newsList: INewsList
}

export {
  IHomeState,
  INewsList,
  INewsInfo
}