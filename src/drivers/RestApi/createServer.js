const express = require('express')

const createRouter = require('./createRouter')

function createServer({ handlers, serializers, dependencies, middlewares }) {
  const application = express()

  application.use(express.json())
  application.use('/', createRouter(handlers, serializers))

  return application
}

module.exports = createServer
