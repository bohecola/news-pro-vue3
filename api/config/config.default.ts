import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1638172177356_6933';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // 配置 cors
  config.cors = {
    origin: () => '*',
    allowMethods: 'GET,POST,PUT,DELETE,HEAD,PATCH',
    credentials: true
  }

  // 关闭csrf
  config.security = {
    csrf: {
      enable: false
    }
  }


  const userConfig = {
    APP_KET: 'be25622035f01a271f9a4a840f4a0ef0',
    API: {
      GET_NEWS_LIST: 'http://v.juhe.cn/toutiao/index'
    }
  }

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
    ...userConfig
  };
};
