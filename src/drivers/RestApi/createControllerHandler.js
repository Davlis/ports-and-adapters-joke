const { get, set } = require('lodash')

const ContextKey = require('./contextKey')

function createControllerHandler(controller) {
  return async (req, res, next) => {
    try {
      // TODO: Validate
      const input = get(req, ContextKey.input)

      const result = await controller(input)

      // TODO: Serialize payload
      console.log('drivers/RestApi/createControllerHandler: result', result)

      set(req, ContextKey.output, result)
      next()
      // res.send(result)
    } catch (error) {
      console.log('Error occured in route plugin controller')
      next(error)
    }
  }
}

module.exports = createControllerHandler
