const { set } = require('lodash')

const { isRouteMatch } = require('./utils')
const ContextKey = require('./contextKey')

function createDecorateRequestWithName(handlers) {
  return function(req, res, next) {
    const { path, method } = req

    const handler = handlers.find(handler => isRouteMatch(handler.path, path))

    if (typeof handler !== 'undefined') {
      set(req, ContextKey.name, handler.name)
    }

    next()
  }
}

module.exports = createDecorateRequestWithName
