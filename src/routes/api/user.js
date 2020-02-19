/**
 * @description 用户相关接口
 * @author malujie
 */

const fs = require('fs')
const path = require('path')
const router = require('koa-router')()
const {
  author
} = require('../../middlewares/author')
const {
  isExist,
  register,
  login
} = require('../../controller/user')
const {
  genValidator
} = require('../../middlewares/validator')
const userValidate = require('../../validator/user')

// 路由前缀
router.prefix('/api/user')

router.get('/test', author(), async (ctx, next) => {
  ctx.body = {
    status: 0,
    msg: '成功'
  }
})

// 用户名是否存在
router.post('/isExist', async (ctx, next) => {
  const {
    userName
  } = ctx.request.body
  const result = await isExist(userName)
  ctx.body = result
})

// 登录
router.post('/login', async (ctx, next) => {
  const {
    userName,
    password
  } = ctx.request.body
  const result = await login(userName, password)
  ctx.body = result
})

// 注册
router.post('/register', genValidator(userValidate), async (ctx, next) => {
  const {
    userName,
    password
  } = ctx.request.body
  // controller
  const result = await register({
    userName,
    password
  })
  ctx.body = result
})

router.post('/uploadFile', async(ctx, next) => {
  const file = ctx.request.files.file
  // 创建可读流
  const reader = fs.createReadStream(file.path)
  const fileName = Date.now() + '.' + file.name
  let filePath = path.join(__dirname, '../../public/upload/') + fileName
  // 创建可写流
  const upStream = fs.createWriteStream(filePath)
  // 可读流通过管道写入可写流
  reader.pipe(upStream)
  ctx.body = '上传成功'
})

module.exports = router