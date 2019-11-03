const { get, set } = require('lodash')

const ContextKey = require('./contextKey')

function createControllerHandler(controller) {
  return async (req, res, next) => {
    try {
      const input = get(req, ContextKey.input)

      const result = await controller(input)

      set(req, ContextKey.output, result)
      next()
    } catch (error) {
      console.log('Error occured in route plugin controller')
      next(error)
    }
  }
}

module.exports = createControllerHandler
