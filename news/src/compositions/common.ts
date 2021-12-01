import { IHeaderInfo } from "@/typings";
import { headerInfos } from '../router';

// 获取header对应的路由信息
// 返回值 IHeaderInfo, 没找到对应的数据 -> undefined
function useRouteInfo (routeName: string): IHeaderInfo | undefined {
  const routeInfo: IHeaderInfo | undefined = headerInfos.find((item: IHeaderInfo) => item.name === routeName);
  return routeInfo;
}

export {
  useRouteInfo
}