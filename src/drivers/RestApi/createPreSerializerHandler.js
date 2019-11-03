const { set } = require('lodash')

const ContextKey = require('./contextKey')

function createPreSerializerHandler(mapper) {
  return function preSerializeHandler(req, res, next) {
    if (typeof mapper === "undefined") {
      next()
      return
    }

    const { body, params } = req

    let result
    try {
      result = mapper({ body, params })
    } catch (error) {
      next(error)
      return
    }

    set(req, ContextKey.input, result)
    next()
  }
}

module.exports = createPreSerializerHandler
