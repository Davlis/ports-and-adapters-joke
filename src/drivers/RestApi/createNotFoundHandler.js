const { STATUS } = require('./constants')

function createNotFoundHandler() {
  return function (req, res, next) {
    const message = 'Route not found'

    res.status(STATUS.NotFound).send({ message })
  }
}

module.exports = createNotFoundHandler
