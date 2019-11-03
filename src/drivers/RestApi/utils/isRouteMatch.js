// TODO: Add support for queries
function isRouteMatch(str1, str2) {
  const str1Splitted = str1.split('/')
  const str2Splitted = str2.split('/')

  if (str1Splitted.length !== str2Splitted.length) {
    return false
  }

  const length = str1Splitted.length

  for (let i = 0; i < length; ++i) {
    if (str1Splitted[i] === str2Splitted[i]) {
      continue
    }

    const parametrized = isParametrized(str1Splitted[i])

    if (parametrized === false) {
      return false
    }
  }

  return true
}

function isParametrized(str) {
  const regex = new RegExp(':([a-zA-Z]*)', 'g')

  const params = str.match(regex)

  if (params === null) {
    return false
  }

  return true
}

module.exports = isRouteMatch
