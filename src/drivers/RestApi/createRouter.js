const { Router } = require('express')
const prepareRoutesFromConfig = require('./prepareRoutesFromConfig')

function createRouter(handlers, serializers) {
  const createRoutesFromConfiguration = prepareRoutesFromConfig(handlers, serializers)

  const router = createRoutesFromConfiguration(Router({ mergeParams: true }))

  return router
}

module.exports = createRouter
