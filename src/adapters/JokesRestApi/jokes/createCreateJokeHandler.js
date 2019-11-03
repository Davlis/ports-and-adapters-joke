const { METHOD_TYPE, STATUS } = require('RestApiDriver/constants')
const { ENDPOINTS } = require('../constants')

function createCreateJokeHandler(plugin) {
  const EndpointConfig = {
    name: ENDPOINTS.CREATE_JOKES,
    method: METHOD_TYPE.POST,
    path: '/jokes',
    controller: plugin.createJoke.bind(plugin),
    requestMapper: ({ body }) => body.data,
    responseMapper: {
      status: STATUS.Created,
      data: (joke) => ({ content: joke.content })
    }
  }

  return EndpointConfig
}

module.exports = createCreateJokeHandler
