const express = require('express')

const createRouter = require('./createRouter')
const createErrorHandler = require('./createErrorHandler')
const createNotFoundHandler = require('./createNotFoundHandler')

function createServer({ handlers, dependencies, middlewares }) {
  const application = express()

  application.use(express.json())
  application.use('/', createRouter(handlers))

  if (typeof dependencies !== 'undefined') {
    application.set('dependencies', dependencies)
  }

  application.use(createErrorHandler(handlers))
  application.use(createNotFoundHandler())

//  if (typeof middlewares !== 'undefined') {
//    middlewares.forEach(middleware => {
//      application.use(middleware)
//    })
//  }

  return application
}

module.exports = createServer
