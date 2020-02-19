/**
 * @description 用户token检测中间件
 * @author malujie
 */

const Token = require('../utils/jwt')
const {
  FailModel
} = require('../model/ResModel')
const {
  authorFail
} = require('../model/ErrorInfo')

function author() {
  return async function validToken(ctx, next) {
    const TOKEN = ctx.header.authorization
    const {
      token: author
    } = Token.decrypt(TOKEN)
    if (!author) {
      ctx.status = 401
      ctx.body = new FailModel(authorFail)
      return
    }
    await next()
  }
}

module.exports = {
  author
}