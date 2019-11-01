const { ENDPOINTS } = require('./constants')

const RequestMapper = {
  [ENDPOINTS.GET_JOKES]: {
    params: id => id
  },
  [ENDPOINTS.CREATE_JOKES]: {
    body: body => body
  },
  [ENDPOINTS.GET_JOKE_BY_ID]: {
    params: id => id
  }
}

const ResponseMapper = {
  [ENDPOINTS.GET_JOKES]: (jokes) => jokes.map(joke => joke.content),
  [ENDPOINTS.CREATE_JOKES]: (jokes) => jokes.map(joke => joke.content)
}

module.exports = {
  pre: RequestMapper,
  post: ResponseMapper
}
