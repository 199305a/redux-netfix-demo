/*
 * @Descripttion: 
 * @Author: cui
 * @Date: 2021-04-12 11:06:11
 * @LastEditors: cui
 * @LastEditTime: 2021-04-12 12:19:12
 */
const React = require('react');
const { Router, Route, IndexRoute, browserHistory } = require('react-router');
const App = require('./components/app/app.js');
const Movie = require('./components/movie/movie.js');
const Movies = require('./components/movies/movies.js');
module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      {/* 默认路由 */}
      <IndexRoute component={Movies} />
      <Route path="movies" component={Movies}>
        <Route path=":id" component={Movie} />
      </Route>
    </Route>
  </Router>
)