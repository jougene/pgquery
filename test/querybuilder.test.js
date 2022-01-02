const { qb } = require('@jougene/pgquery')
const assert = require('./assert')
const { deformat } = require('./lib/sql')

describe('Querybuilder', () => {
  it('select', () => {
    const sql = qb('users').toSql()

    const expected = 'select * from users'

    assert.equal(sql, expected)
  })

  it('first', () => {
    const sql = qb('users').first().toSql()

    const expected = 'select * from users limit 1'

    assert.equal(sql, expected)
  })

  it('order by', () => {
    const sql = qb('users').orderBy('created_at', 'desc').first().toSql()

    const expected = 'select * from users order by created_at desc limit 1'

    assert.equal(sql, expected)
  })

  it('join', () => {
    const sql = qb('users').join('posts').first().toSql()

    // group by need only in one to many relations
    const expected = deformat(`
select
  users.*,
  jsonb_agg(posts.*) as posts
from users
  join posts on users.id = posts.user_id
group by users.id
limit 1
`)

    it('join reverse', () => {
      const sql = qb('posts').join('users').toSql()

      const expected = deformat(`
select
  posts.*,
  to_jsonb(users.*) as "user"
from posts
join users on posts.user_id = users.id
`)
      assert.equal(sql, expected)
    })

    assert.equal(sql, expected)
  })
})
