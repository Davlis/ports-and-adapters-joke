const { METHOD_TYPES } = require('RestApiDriver/constants')
const { ENDPOINTS } = require('./constants')

function createHandlers({ plugin }) {
  return [
    {
      name: ENDPOINTS.GET_JOKES,
      method: METHOD_TYPES.GET,
      path: '/jokes',
      controller: plugin.getRandomJoke.bind(plugin),
    },
    {
      name: ENDPOINTS.CREATE_JOKES,
      method: METHOD_TYPES.POST,
      path: '/jokes',
      controller: plugin.createJoke.bind(plugin),
    },
  ]
}

module.exports = createHandlers
