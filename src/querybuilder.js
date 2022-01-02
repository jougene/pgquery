class Querybuilder {
  constructor (table) {
    this.table = table
  }

  select () {
    return this
  }

  insert () {
    return this
  }

  update () {
    return this
  }

  first () {
    return this
  }

  join () {
    return this
  }

  toSql () {}
}

module.exports = Querybuilder
