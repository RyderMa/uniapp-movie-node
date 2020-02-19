/**
 * @description jsonWebToken验证工具
 * @author malujie
 */

const jwt = require('jsonwebtoken')

const Token = {
  encrypt(data, time) {
    return jwt.sign(data, 'token', {
      expiresIn: time
    })
  },
  decrypt(token) {
    try {
      let data = jwt.verify(token, 'token')
      return {
        token: true,
        id: data.id
      }
    } catch (error) {
      return {
        token: false,
        data: error
      }
    }
  }
}

module.exports = Token