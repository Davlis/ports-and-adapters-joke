const BaseDataSourceLength = 3

const random = (min, max) => Math.floor(min + (Math.random() * (max)))

class JokeDal {
  constructor() {
    this.jokes = new Array(BaseDataSourceLength).fill(0).map((_, idx) => ({
      id: idx + 1,
      content: `Joke #${idx + 1}`
    })) 
  }

  async get(id) {
    if (typeof id === "undefined") {
      const dataLength = this.jokes.length
      const rndIndx = random(0, dataLength)

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
