/**
 * @description user controller
 * @author malujie
 */

const {
  getUserInfo,
  createUser
} = require('../services/user')
const Token = require('../utils/jwt')
const {
  SuccessModel,
  FailModel
} = require('../model/ResModel')
const {
  registerUserNameIsExist,
  registerFail,
  loginFail
} = require('../model/ErrorInfo')


/**
 * 检测用户名是否可用
 * @param {string} userName
 */
async function isExist(userName) {
  const userInfo = await getUserInfo(userName)
  if (userInfo) {
    return new FailModel(registerUserNameIsExist)
  }
  return {
    status: 0,
    msg: '用户名可用'
  }
}

/**
 * 注册用户
 * @param {object} param0 
 */
async function register({userName, password}) {
  const userInfo = await getUserInfo(userName)
  // 用户名已存在
  if (userInfo) {
    return new FailModel(registerUserNameIsExist)
  }

  // 执行注册
  try {
    await createUser({userName, password})
    return new SuccessModel('注册成功')
  } catch (error) {
    console.error(error.message, error.stack)
    return new FailModel(registerFail)
  }
}

/**
 * 用户登录
 * @param {string} userName
 * @param {string} password
 */
async function login(userName, password) {
  const userInfo = await getUserInfo(userName, password)
  const token = Token.encrypt({userInfo}, '1h')
  if(userInfo) {
    return new SuccessModel('登录成功', token)
  }
  return new FailModel(loginFail)
}

module.exports = {
  isExist,
  register,
  login
}