import { IHeaderInfo } from "@/typings";
import { headerInfos } from '../router';

function useRouteInfo (routeName: string): IHeaderInfo | undefined {
  const routeInfo: IHeaderInfo | undefined = headerInfos.find((item: IHeaderInfo) => item.name === routeName);
  return routeInfo;
}

export {
  useRouteInfo
}