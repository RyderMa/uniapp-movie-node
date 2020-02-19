/**
 * @description json schema 中间件
 * @author malujie
 */

const {
  FailModel
} = require('../model/ResModel')

function genValidator(validateFn) {
  async function validator(ctx, next) {
    const data = ctx.request.body
    const error = validateFn(data) // 校验数据
    // 校验数据错误
    if(error) {
      ctx.body = new FailModel({
        status: -100,
        msg: error.map(err => err.message)[0]
      })
      return
    }
    // 符合校验规则
    await next()
  }
  return validator
}

module.exports = {
  genValidator
}