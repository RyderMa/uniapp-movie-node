/**
 * @description 用户数据scheme校验
 * @author malujie
 */

const validate = require('./_validate')

const SCHEME = {
  type: 'object',
  // require: ["userName", "password"], // 必填属性
  properties: {
    userName: {
      type: 'string',
      pattern: '^[a-zA-Z][a-zA-Z0-9_]+$',  // 字母开头，字母数字下划线结尾
      maxLength: 255,
      minLength: 3,
      errorMessage: {
        pattern: '用户名必须以字母开头，字母数字下划线结尾',
        maxLength: '用户名过长',
        minLength: '用户名长度必须大于等于3'
      }
    },
    password: {
      type: 'string',
      maxLength: 255,
      minLength: 3,
      errorMessage: {
        minLength: '密码长度必须大于等于3位'
      }
    },
    newPassword: {
      type: 'string',
      maxLength: 255,
      minLength: 3
    },
    nickName: {
      type: 'string',
      maxLength: 255
    },
    picture: {
      type: 'string',
      maxLength: 255
    },
    city: {
      type: 'string',
      maxLength: 255,
      minLength: 2
    },
    gender: {
      type: 'number',
      minimum: 1,
      maximum: 3
    }
  }
}

// 执行校验
function userValidate(data = {}) {
  return validate(SCHEME, data)
}

module.exports = userValidate