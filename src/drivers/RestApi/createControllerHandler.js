function createControllerHandler(controller) {
  return async (req, res, next) => {
    try {
      // TODO: Validate
      const result = await controller()
      // TODO: Serialize payload
      console.log('drivers/RestApi/createControllerHandler: result', result)
      res.send(result)
    } catch (error) {
      console.log('Error occured in route plugin controller')
      next(error)
    }
  }
}

module.exports = createControllerHandler
