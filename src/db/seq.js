/**
 * @description sequelize 实例
 * @author malujie
 */

const Sequelize = require('sequelize')
const {
  isTest,
  isProd
} = require('../utils/env')
const {
  SQL_CONF
} = require('../config/db')

// 单元测试时不输出 sql 语句
if (isTest) {
  conf.logging = () => {}
}

const {
  host,
  user,
  password,
  database
} = SQL_CONF

const conf = {
  host,
  dialect: 'mysql' // 数据库类型
}

// 生产环境配置连接池
if (isProd) conf.pool = {
  max: 5, // 连接池中最大的连接数量
  min: 0, // 最小数量
  idle: 10000 // 连接池超过 10s 未使用自动释放
}

/**
 * @param 数据库名称
 * @param 登录用户
 * @param 登录密码
 * @param {host, dialect} 数据库地址和类型
 */
const seq = new Sequelize(database, user, password, conf)

module.exports = seq