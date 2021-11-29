import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async getNewsList () {
    const { ctx } = this;

    ctx.body = await ctx.service.api.getNewsList();
  }
}
