import { IGlobalState } from "@/store";
import { SET_CURRENT_NEWS } from "@/store/detail/actionTypes";
import { INewsInfo } from "@/typings";
import { RouteLocationNormalizedLoaded } from "vue-router";
import { Store } from "vuex";

// 获取当前的新闻信息
function useDetailInfo (store: Store<IGlobalState>, route: RouteLocationNormalizedLoaded): INewsInfo | undefined {
  // 新闻的唯一key
  const uniquekey: string = route.params.uniquekey as string;
  // 跳转详情页来源页面名称
  const pageFrom: string = route.params.from as string;

  /**
   * 如果pageForm是收藏页:
   *    到localStorage里去拿到newsList数据
   * 如果不是收藏页
   *    到state里去拿新闻列表
   */
  const newsData: INewsInfo[] = pageFrom === 'MyNews'
        ? JSON.parse(localStorage.getItem('newsList') || '[]')
        : store.state.home.newsList.news;

  // 拿到newsData后，遍历，用uniquekey对比每一项的uniquekey, 相等则取出
  const newsInfo: INewsInfo | undefined = newsData.find((item: INewsInfo) => item.uniquekey === uniquekey);
  // 设置当前新闻信息
  store.dispatch(`detail/${SET_CURRENT_NEWS}`, newsInfo);

  return newsInfo;
}

export {
  useDetailInfo
}