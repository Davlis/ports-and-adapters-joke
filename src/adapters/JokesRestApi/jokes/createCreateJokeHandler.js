const { METHOD_TYPE, STATUS } = require('RestApiDriver/constants')
const { ENDPOINTS } = require('../constants')

const { JokeValidationError } = require('JokesPlugin/errors')

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
    },
    errorMapper: (error) => {
      if (error instanceof JokeValidationError) {
        return {
          status: STATUS.BadRequest,
          data: { message: 'Joke validation error.', stack: error.message }
        }
      }
    }
  }

  return EndpointConfig
}

module.exports = createCreateJokeHandler
