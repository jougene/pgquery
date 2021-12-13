// const Pool = require('pg-pool')
const Querybuilder = require('./querybuilder')

module.exports = {
  qb (table) {
    return new Querybuilder(table)
  }
  // const pool = new Pool(config)

  // const client = await pool.connect()

  // return client
}
