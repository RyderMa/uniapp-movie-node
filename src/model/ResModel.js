/**
 * @description 接口返回数据模板
 * @author malujie
 */

// 基础类
class BaseModel {
  constructor({
    status,
    data,
    msg
  }) {
    this.status = status
    if (data) {
      this.data = data
    }
    if (msg) {
      this.msg = msg
    }
  }
}

// 成功返回类
class SuccessModel extends BaseModel {
  constructor(msg = '调用成功', data = {}) {
    super({
      status: 0,
      data,
      msg
    })
  }
}

// 失败返回类
class FailModel extends BaseModel {
  constructor({
    status,
    msg
  }) {
    super({
      status,
      msg
    })
  }
}

module.exports = {
  SuccessModel,
  FailModel
}