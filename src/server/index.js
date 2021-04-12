/*
 * @Descripttion:
 * @Author: cui
 * @Date: 2021-04-12 21:16:01
 * @LastEditors: cui
 * @LastEditTime: 2021-04-12 21:30:54
 */
const path = require('path')
const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')
const { PORT = 3000, PWD = __dirname } = process.env
const app = express()

/** schema 模式   session 会话 */
app.use('/q', graphqlHTTP(req => ({
  schema,
  context: req.session
})))
// 设置可访问文件 dist  public
app.use('/dist', express.static(path.resolve(PWD, 'build', 'public')))
app.use('/dist/:flie', (req, res) => {
  res.sendFile(req.params.file, {
    root: path.resolve(PWD, 'build', 'public')
  })
})
app.use('*', (req, res) => {
  res.sendFile('index.html', {
    root: PWD
  })
}
)

app.listen(PORT, () => console.log(`Running serve on port ${PORT}`))