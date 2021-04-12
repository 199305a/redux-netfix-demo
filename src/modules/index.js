/*
 * @Descripttion: 
 * @Author: cui
 * @Date: 2021-04-12 11:06:11
 * @LastEditors: cui
 * @LastEditTime: 2021-04-12 11:36:59
 */
/*
 * @Descripttion: 
 * @Author: cui
 * @Date: 2021-04-12 11:06:11
 * @LastEditors: cui
 * @LastEditTime: 2021-04-12 11:26:05
 */
const { combineReducers } = require('redux')
const { reducer: movies } = require('./movies')


// 合并reducer
module.exports = combineReducers({
  movies
})