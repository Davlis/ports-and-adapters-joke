const DataSourceLength = 3

const random = (min, max) => Math.floor(min + (Math.random() * (max + 1)))

class JokeDal {
  constructor() {
    console.log('Joke DAL executed')
    this.jokes = new Array(DataSourceLength).fill(0).map((_, idx) => `Joke #${idx + 1}`)
  }

  async get(id) {
    console.log("id", id)

    if (typeof id === "undefined") {
      const dataLength = this.jokes.length
      const rndIndx = random(0, dataLength)

      console.log("hello")

      return this.jokes[rndIndx]
    }
    
    return this.jokes[id]
  }

  async create(body) {
    this.jokes.push(body)

    return this.jokes[this.jokes.length - 1]
  }
}

module.exports = JokeDal
