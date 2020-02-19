/**
 * @description 失败信息合集
 * @author malujie
 */

module.exports = {
  // 用户名已存在
  registerUserNameIsExist: {
    status: -1,
    msg: '用户名已存在'
  },
  // 注册失败
  registerFail: {
    status: -2,
    msg: '注册失败'
  },
  // 登录失败
  loginFail: {
    status: -3,
    msg: '用户名或密码错误'
  },
  // token过期
  authorFail: {
    status: -5000,
    msg: '权限验证失败'
  }
}