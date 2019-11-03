const { JokeNotFound } = require('./errors')

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

    if (typeof result === "undefined") {
      throw new JokeNotFound(`Joke for id=${identifier} was not found`)
    }

    return result
  }

  async createJoke(body) {
    let result
    try {
      result = await this.JokeDAL.create(body) 
    } catch (error) {
      throw error
    }

    return result
  }
}

module.exports = JokeService
