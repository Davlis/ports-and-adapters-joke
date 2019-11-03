const constants = require('./constants')
const { METHOD_TYPE } = constants

const createDecorateRequestWithName = require('./createDecorateRequestWithName')
const createPreSerializerHandler = require('./createPreSerializerHandler')
const createControllerHandler = require('./createControllerHandler')
const createPostSerializerHandler = require ('./createPostSerializerHandler')

function createRouterFromConfig(handlers) {
  return (Router) => {
    handlers.map(handler => {
      if (handler.method !== METHOD_TYPE.POST && handler.method !== METHOD_TYPE.GET) {
        console.log('Route uses forbidden method type', handler)
        return
      }

      const decorateRequestWithName = createDecorateRequestWithName(handlers)
      const preSerializeHandler = createPreSerializerHandler(handler.requestMapper)
      const controllerHandler = createControllerHandler(handler.controller)
      const postSerializeHandler = createPostSerializerHandler(handler.responseMapper)

      Router[handler.method](
        handler.path,
        decorateRequestWithName,
        preSerializeHandler,
        controllerHandler,
        postSerializeHandler
      )
    })

    return Router
  }
}

module.exports = createRouterFromConfig
