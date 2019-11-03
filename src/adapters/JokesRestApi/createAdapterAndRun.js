
const RestApiDriver = require('RestApiDriver')

const config = require('./config')

function createAdapterAndRun(handlers) {
  const server = RestApiDriver({
    config,
    handlers,
    dependencies: [],
    middlewares: [],
  })
  return server
}

module.exports = createAdapterAndRun
