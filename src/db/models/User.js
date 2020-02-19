/**
 * @description 用户数据模型
 * @author malujie
 */

const seq = require('../seq')
const {
  STRING,
  DECIMAL
} = require('../../config/seq-types')

// 数据库创建 users 表
const User = seq.define('user', {
  userName: {
    type: STRING,
    allowNull: false,
    unique: true, // 唯一性
    commet: '用户名/账户'
  },
  password: {
    type: STRING,
    allowNull: false
  },
  nickName: {
    type: STRING,
    allowNull: false,
    comment: '昵称'
  },
  gender: {
    type: DECIMAL,
    allowNull: false,
    defaultValue: 3,
    comment: '性别 (1男 2女 3保密)'
  },
  picture: {
    type: STRING,
    comment: '头像 存储图片地址'
  },
  city: {
    type: STRING,
    comment: '城市'
  }
})

module.exports = User