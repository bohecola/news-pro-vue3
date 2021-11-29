import 'egg';

interface IHttpGetParams {
  url: string,
  data: any,
  success: (data: any) => void,
  fail: (err: any) => void
}

declare module 'egg' {
  IHttpGetParams
}