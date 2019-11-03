const {
  createCreateJokeHandler,
  createGetJokeByIdHandler,
  createGetRandomJokeHandler
} = require('./jokes')

function createHandlers({ plugin }) {
  return [
    createCreateJokeHandler(plugin),
    createGetJokeByIdHandler(plugin),
    createGetRandomJokeHandler(plugin),
  ]
}

module.exports = createHandlers
