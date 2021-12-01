import { IGlobalState } from "@/store";
import { IHeaderInfo, IHomeState, IPostData, NAV_TYPES } from "@/typings";
import _ from "lodash";
import { computed, onMounted, Ref } from "vue";
import { Store } from "vuex";
import { headerInfos } from '../router';

// 获取header对应的路由信息
// 返回值 IHeaderInfo, 没找到对应的数据 -> undefined
function useRouteInfo (routeName: string): IHeaderInfo | undefined {
  const routeInfo: IHeaderInfo | undefined = headerInfos.find((item: IHeaderInfo) => item.name === routeName);
  return routeInfo;
}

// 图片淡入
function useImgShow (imgRefs: Ref<null | HTMLElement>[]): void {
  // 收集Item里的所有图片的ref, 遍历refs, 当图片加载完成的时候，让图片的透明度为1
  imgRefs.map((imgRef) => {
    const oImg = imgRef.value;

    oImg!.onload = function () {
      oImg!.style.opacity = '1';
    }
  })
}

function useLoadingMore (
  // 仓库
  store: Store<IGlobalState>,
  // store的模块名：home detail
  module: string,
  // action type module/actionTypes
  actionType: string,
  // list元素
  element: Ref<null | HTMLElement>
) {
  let el: HTMLElement;
  let state: IHomeState;

  // 类型断言操作
  switch (module) {
    case 'home':
      state = store.state.home as IHomeState;
      break;
    default:
      break;
  }

  onMounted(() => {
    el = element.value as HTMLElement;
    el.addEventListener('scroll', _.debounce(_loadMore, 300), false)
  })

  function _loadMore (): void {
    const listHeight: number = el.clientHeight;
    const scrollHeight: number = el.scrollHeight;
    const scrollTop: number = el.scrollTop;

    const type: NAV_TYPES = computed(() => state.currentType).value;
    const pageNum: number = computed(() => state.newsList.pageNum).value;
    const count: number = computed(() => state.newsList.count).value;

    if (listHeight + scrollTop >= scrollHeight - 30) {
      store.dispatch(`${module}/${actionType}`, <IPostData>{
        type,
        pageNum,
        count
      })
    }
  }

  return {
    isLoading: computed(() => state.newsList.isLoading),
    hasMore: computed(() => state.newsList.hasMore)
  }
}

export {
  useRouteInfo,
  useImgShow,
  useLoadingMore
}