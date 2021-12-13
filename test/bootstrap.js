require('module-alias/register')

console.dump = (value) => {
  console.log(require('util').inspect(value, false, 5, true))
}

const connect = require('@jougene/pgquery')

;(async () => {
  const client = await connect({
    user: 'pgquery',
    database: 'pgquery',
    password: 'pgquery',
    port: 55432
  })

  const { rows } = await client.query(`
select
  users.*,
  jsonb_agg(posts.*) as posts
from users
  join posts on users.id = posts.user_id
group by users.id
limit 1
  `)

  console.dump({ rows })

  await client.end()
})()
