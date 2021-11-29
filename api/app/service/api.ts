import { Service } from 'egg';

/**
 * Test Service
 */
export default class Test extends Service {
  public async getNewsList(): Promise<void> {
    const { ctx } = this;
  }
}
