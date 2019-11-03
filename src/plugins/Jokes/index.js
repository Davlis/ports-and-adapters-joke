const { JokeNotFound, JokeValidationError } = require('./errors')

class JokeService {
  constructor({ JokeDAL }) {
    this.JokeDAL = JokeDAL
  }

  async getRandomJoke() {
    let result
    try {
      result = await this.JokeDAL.get()
    } catch (error) {
      throw error
    }

    return result
  }

  async getJoke(identifier) {
    let result
    try {
      result = await this.JokeDAL.get(identifier)
    } catch (error) {
      throw error
    }

    if (typeof result === 'undefined') {
      throw new JokeNotFound(`Joke for id=${identifier} was not found.`)
    }

    return result
  }

  async createJoke(body) {
    let result

    // TODO: Transform this to be IoC-good
    if (typeof body === 'undefined' || body === null) {
      throw new JokeValidationError('Joke payload can not be empty.')
    }

    if (typeof body.content === 'undefined' || body.content === null) {
      throw new JokeValidationError('Joke\'s "content" field can not be empty.')
    }

    if (typeof body.content !== 'string') {
      throw new JokeValidationError('Joke\'s "content" field must be of string type.')
    }

    try {
      result = await this.JokeDAL.create(body) 
    } catch (error) {
      throw error
    }

    return result
  }
}

module.exports = JokeService
