const createServer = require('./createServer')

function initialize({ config, handlers, serializers, dependencies, middlewares }) {
  const { port, host } = config.server

  let application
  try {
    application = createServer({ handlers, serializers, dependencies, middlewares })
  } catch (error) {
    console.log('Error occured while creating server...', error)
    process.exit(1)
  }
  
  application.listen(port, host, () => {
    console.log(`Application is running on ${host}:${port}`)
  })
}

module.exports = initialize
