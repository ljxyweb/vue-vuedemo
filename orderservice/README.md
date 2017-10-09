# orderservice

移动端的一个餐饮页面demo。运行时效果如下：

<img src="https://raw.githubusercontent.com/ljxyweb/MarkDownPhotos/master/vue-vuedemo/os.jpg">

## 详情
- 使用flexible.js来进行移动端的适配，并在.eslintignore文件中设置以去除Eslint对该文件的检查。
- vue-router进行路由的跳转。同时通过vue的异步组件和Webpack的code splitting feature, 轻松实现路由组件的懒加载。类似如下：
```
{
  path: '',
  component: () => import('../views/Store.vue')
}
```
- 使用axios发送请求，获取数据。
- 使用json-server来模拟数据，模拟的数据均放在mock文件夹下.同时需设置config/index.js文件内的dev.proxyTable，类似如下
```
proxyTable: {
    '/api': {
    target: 'http://localhost:3000',
    changeOrigin: true,
    pathRewrite: {
          '^/api': ''
    }
  }
}
```
- 设置devtool为source-map以便于调试。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run mock
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
