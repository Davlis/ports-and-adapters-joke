
const RestApiDriver = require('RestApiDriver')

const config = require('./config')
const serializers = require('./serializers')

function createAdapterAndRun(handlers) {
  const server = RestApiDriver({
    config,
    handlers,
    serializers,
    dependencies: [],
    middlewares: [],
  })
  return server
}

module.exports = createAdapterAndRun
