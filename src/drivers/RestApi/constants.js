const METHOD_TYPE = {
  'GET': 'get',
  'POST': 'post'
}

const STATUS = {
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NoContent: 204,
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  PreconditionFailed: 412,
  InternalServerError: 500,
  NotImplemented: 501
}

module.exports = {
  METHOD_TYPE,
  STATUS
}
