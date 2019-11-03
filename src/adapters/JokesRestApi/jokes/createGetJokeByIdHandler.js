const { METHOD_TYPE, STATUS } = require('RestApiDriver/constants')
const { ENDPOINTS } = require('../constants')

const { JokeNotFound } = require('JokesPlugin/errors')

function createGetJokeByIdHandler(plugin) {
  const EndpointConfig = {
    name: ENDPOINTS.GET_JOKE_BY_ID,
    method: METHOD_TYPE.GET,
    path: '/jokes/:id',
    controller: plugin.getJoke.bind(plugin),
    requestMapper: ({ params }) => params.id,
    responseMapper: {
      status: STATUS.Ok,
      data: (joke) => ({ content: joke.content })
    },
    errorMapper: (error) => {
      if (error instanceof JokeNotFound) {
        return {
          status: STATUS.NotFound,
          data: { message: 'Joke not found' }
        }
      }
    }
  }

  return EndpointConfig
}

module.exports = createGetJokeByIdHandler
