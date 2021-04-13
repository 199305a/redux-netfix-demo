<!--
 * @Descripttion: 
 * @Author: cui
 * @Date: 2021-04-12 21:09:16
 * @LastEditors: cui
 * @LastEditTime: 2021-04-12 23:55:26
-->
# redux-netfix-demo
>实现server端
使用app来提供api

/server/index.js
实现访问的文件夹和*路径返回index

/server/schema.js
定义数据模板

使用axios 查询服务端数据 然后传递数据
```shell
this.props.fetchMovie(response)
```
展示数据
```
connect(
  ({ movies }) => ({ movies: movies.all }), {
  fetchMovies: fetchMoviesActionCreator
})(Movies)
```

使用Jest进行单元测试
>代码是负债 使用代码构建的产品是资产，但是代码不是 代码本身不产生任何收入。代码仅仅是制作产品的工具 是一种负债


单元测试70% 继承测试20% 验收测试10%