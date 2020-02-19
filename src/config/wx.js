/**
 * @description 微信小程序配置
 * @author malujie
 */

const WX_CONF = {
  appId: 'wx4f8b6878ee8f24e1',
  appSecret: 'da14c82c5053151c45153a882e734de3',
}

const LOGIN_URL = `https://api.weixin.qq.com/sns/jscode2session?appid=${WX_CONF.appId}&secret=${WX_CONF.secret}&js_code=JSCODE&grant_type=authorization_code`

module.exports = {
  WX_CONF,
  LOGIN_URL
}