const { METHOD_TYPE, STATUS } = require('RestApiDriver/constants')
const { ENDPOINTS } = require('../constants') 

function createGetRandomJokeHandler(plugin) {
  const EndpointConfig = {
    name: ENDPOINTS.GET_JOKES,
    method: METHOD_TYPE.GET,
    path: '/jokes',
    controller: plugin.getRandomJoke.bind(plugin),
    requestMapper: undefined,
    responseMapper: {
      status: STATUS.Ok,
      data: (joke) => ({ content: joke.content })
    },
  }
  
  return EndpointConfig
}

module.exports = createGetRandomJokeHandler
