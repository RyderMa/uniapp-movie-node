/**
 * @description user service
 * @author malujie
 */

const {
  User
} = require('../db/models/index')

/**
 * 查询用户信息
 * @param {string} userName 
 * @param {string} password 
 */
async function getUserInfo(userName, password) {
  // 查询条件
  const whereOpt = {
    userName
  }
  // es6 对象拼接
  password && Object.assign(whereOpt, {
    password
  })

  // 执行查询
  const result = await User.findOne({
    attributes: ['id', 'userName', 'nickName', 'picture', 'city'],
    where: whereOpt
  })
  return result
}

/**
 * 创建新用户
 * @param {object} param0 
 */
async function createUser({
  userName,
  password,
  gender = 3,
  nickName
}) {
  const result = await User.create({
    userName,
    password,
    gender,
    nickName: nickName ? nickName : userName
  })
  const data = result.dataValues
  return data
}

module.exports = {
  getUserInfo,
  createUser
}