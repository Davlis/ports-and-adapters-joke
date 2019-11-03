const { Router } = require('express')
const prepareRoutesFromConfig = require('./prepareRoutesFromConfig')

function createRouter(handlers) {
  const createRoutesFromConfiguration = prepareRoutesFromConfig(handlers)

  const router = createRoutesFromConfiguration(Router({ mergeParams: true }))

  return router
}

module.exports = createRouter
