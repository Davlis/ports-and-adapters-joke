const { get } = require('lodash')

const ContextKey = require('./contextKey')
const { STATUS } = require('./constants')

// TODO: Add support for global error handlers
function createErrorHandler(routeHandlers, globalHandlers = []) {
  const routeHandlersWithErrorMappers = routeHandlers.filter(rh => typeof rh.errorMapper !== 'undefined')

  return function (error, req, res, next) {
    const requestName = get(req, ContextKey.name)
    const routeHandler = routeHandlersWithErrorMappers.find(rh => rh.name === requestName)

    if (typeof routeHandler === 'undefined') {
      res.status(STATUS.InternalServerError).send({ message: 'Unexpected error' })
      return
    }

    const routeErrorMapper = routeHandler.errorMapper

    if (typeof routeErrorMapper === 'undefined') {
      res.status(STATUS.InternalServerError).send({ message: 'Unexpected error' })
      return
    }

    const errorMapperResult = routeErrorMapper(error)

    if (typeof errorMapperResult === 'undefined') {
      res.status(STATUS.InternalServerError).send({ message: 'Unexpected error' })
      return
    }

    res.status(errorMapperResult.status).send({ ...errorMapperResult.data })
  }
}

module.exports = createErrorHandler
