const constants = require('./constants')
const { METHOD_TYPES } = constants

const createPreSerializerHandler = require('./createPreSerializerHandler')
const createControllerHandler = require('./createControllerHandler')
const createPostSerializerHandler = require ('./createPostSerializerHandler')

function createRouterFromConfig(handlers, serializers) {
  return (Router) => {
    handlers.map(handler => {
      if (handler.method !== METHOD_TYPES.POST && handler.method !== METHOD_TYPES.GET) {
        console.log('Route uses forbidden method type', handler)
        return
      }

      const preSerializeHandler = createPreSerializerHandler(serializers.RequestMapper)
      const controller = createControllerHandler(handler.controller)
      const postSerializeHandle = createPostSerializerHandler(serializers.ResponseMapper)

      Router[handler.method](handler.path, preSerializeHandler, controller, postSerializeHandle)
    })

    return Router
  }
}

module.exports = createRouterFromConfig
