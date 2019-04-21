// 首个路由为首页
module.exports = [{
  path: 'pages/home',
  name: 'home',
  config: {
    navigationBarTitleText: '猫眼电影'
    // 引入UI组件，后面会讲到
    // usingComponents: {
    //   'zan-button': '../dist/btn/index'
    // }
  }
}, {
  path: 'pages/selectCity',
  name: 'selectCity',
  config: {
    navigationBarTitleText: '选择城市'
  }
}, {
  path: 'pages/search',
  name: 'search',
  config: {
    navigationBarTitleText: '搜索'
  }
}, {
  path: 'pages/filmDetail',
  name: 'filmDetail',
  config: {
    navigationBarTitleText: '影片详情'
  }
}, {
  path: 'pages/personal',
  name: 'personal',
  config: {
    navigationBarTitleText: '我的'
  }
}]
