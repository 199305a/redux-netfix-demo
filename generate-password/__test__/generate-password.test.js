/*
 * @Descripttion:
 * @Author: cui
 * @Date: 2021-04-13 10:15:27
 * @LastEditors: cui
 * @LastEditTime: 2021-04-13 10:28:46
 */

describe('method generatePassword', () => {
  let password
  generatePassword = require('../src/generate-password.js')
  it('return  a  generator password of lower-case characters', (done) => {
    password = generatePassword()
    expect(password).toMatch(/^[a-z0-9]{8}$/)
    done()
  })
})