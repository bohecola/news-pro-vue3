import { IPageData } from "../../typings";

function typeOf(value: string): string {
  if (value === null) {
    return 'null';
  }

  if (typeof(value) === 'object') {
    const types = {
      '[object Object]': 'Object',
      '[object Array]': 'Array'
    };

    const toStr = Object.prototype.toString;

    return types[toStr.call(value)];
  }

  return typeof(value);
}

// 对象 -> 定义接口  data参数不定
/**
 * 
 * interface IRequestData {
 *   [key: string]: any
 * }
 */
function formatParams (data: any, appkey: string): string {

  // data一定是一个对象才行
  if (typeOf(data) !== 'Object') {
    throw new Error('Option "data" must be a type Object')
  }

  /**
   * data: {
   *   type: 'top'
   * }
   */

  // 拼接的参数是 ?type=top&key=APPKEY
  let paramStr: string = '?';

  // 遍历对象，拼接paramStr
  for (let key in data) {
    paramStr += `${key}=${data[key]}&`;
  }

  // 判断有没有appkey, 有就继续拼接，没有则把原来的&去掉
  return appkey ? paramStr + 'key=' + appkey : paramStr.slice(0, -1)
}

function getPageData<T> (data: Array<T>, pageNum: number, count: number): IPageData<T> {
  const retInfo: IPageData<T> = {
    hasMore: true,
    data: []
  }

  if (data.length <= count) {
    retInfo.data?.concat(data);
    retInfo.hasMore = false;
  } else {
    const pageCount: number = Math.ceil(data.length / count);

    if (pageNum >= pageCount) {
      retInfo.data = null;
      retInfo.hasMore = false;
    } else {
      retInfo.data = data.splice(pageNum * count, count);
      retInfo.hasMore = true;
    }
  }

  return retInfo;
}

export {
  typeOf,
  formatParams,
  getPageData
}