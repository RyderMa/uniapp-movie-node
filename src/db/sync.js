/**
 * @description sequelize 数据库同步
 * @author malujie
 */

const seq = require('./seq')
require('./models/index')

seq.authenticate()
  .then(() => {
    console.log('connection ok')
  })
  .catch(err => {
    console.log(err)
  })

/**
 * @param {object} param0 force强制创建新模板
 */
seq.sync({force: true})
.then(() => {
  console.log('sync ok')
  // 同步完成退出程序
  process.exit()
})