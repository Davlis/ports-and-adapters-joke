const { get } = require('lodash')

const { STATUS } = require('./constants')
const ContextKey = require('./contextKey')

function createPostSerializerHandler(mapper) {
  return function postSerializeHandler(req, res, next) {
    const mapperExists = typeof mapper !== "undefined"
    const output = get(req, ContextKey.output, null)

    const status = (mapperExists ? mapper.status : STATUS.Ok) || STATUS.Ok
    const responseBody = (mapperExists ? mapper.data(output) : output) || output

    res.status(status).json(responseBody)
  }
}

module.exports = createPostSerializerHandler
