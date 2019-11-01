const JokesPlugin = require('JokesPlugin')

const InMemoryJokeDal = require('./InMemoryJokeDal')
const createHandlers = require('./createHandlers')
const createAdapterAndRun = require('./createAdapterAndRun')

try {
  const JokeDAL = new InMemoryJokeDal()

  const plugin = new JokesPlugin({ JokeDAL })

  const handlers = createHandlers({ plugin })

  createAdapterAndRun(handlers)
} catch (error) {
  console.log('Error while creating adapter', error)
}
