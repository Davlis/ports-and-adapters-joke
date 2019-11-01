const container = {

}

const get = (name) => {
  if (!container[name]) {
    console.warn(`Dependency ${name} not found in container`)
  }
}

const set = (name, instance) => {
  if (container[name]) {
    console.warn(`Dependency ${name} were already set in container`)
  }

  container[name] = instance
}

module.exports = {
  get,
  set
}