<!--
 * @Descripttion: 
 * @Author: cui
 * @Date: 2021-04-12 21:09:16
 * @LastEditors: cui
 * @LastEditTime: 2021-04-12 23:40:01
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