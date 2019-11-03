class JokeNotFound extends Error {
  constructor(message) {
    super(message)
  }
}

module.exports = JokeNotFound
