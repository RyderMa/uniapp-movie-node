/**
 * @description ajv数据校验
 * @author malujie
 */

const Ajv = require('ajv')
const ajv = new Ajv({allErrors: true})
require('ajv-errors')(ajv)

function validate(scheme, data = {}) {
  const valid = ajv.validate(scheme, data)
  if(!valid) {
    return ajv.errors
  }
}

module.exports = validate