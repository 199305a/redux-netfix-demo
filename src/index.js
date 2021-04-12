/*
 * @Descripttion: 
 * @Author: cui
 * @Date: 2021-04-12 11:06:11
 * @LastEditors: cui
 * @LastEditTime: 2021-04-12 14:34:33
 */
const React = require('react');
const { render } = require('react-dom')
const { Provider } = require('react-redux')
const { createStore } = require('redux')
const reducers = require('./modules')
const routes = require('./routes')

module.exports = render((
  // 合并Redux
  <Provider store={createStore(reducers)}>
    {routes}
  </Provider>
), document.getElementById('app'))