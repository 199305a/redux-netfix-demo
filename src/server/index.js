/*
 * @Descripttion: 
 * @Author: cui
 * @Date: 2021-04-12 18:38:42
 * @LastEditors: cui
 * @LastEditTime: 2021-04-12 18:52:11
 */

const path = require('path')
const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')
const {
  PORT = 3000,
  PWD = __dirname
} = process.env

const app = express()

app.use('/q', graphqlHTTP(req => ({
  schemam,
  context: req.session
})))
app.use('/dist', express.static(path.resolve(PWD, 'build', 'public')))
app.use('*', (req, res) => {
  res.sendFile('index.html', { root: PWD })
})
app.listen(PORT, () => console.log(`Running server on port ${PORT}`)