const Pool = require('pg').Pool
const pool = new Pool({
  user: 'admin',
  host: 'postgresql.camel-test-brian.svc',
  database: 'sampledb',
  password: 'admin',
  port: 5432,
})

console.log('In dal')

const getUsers = () => {
  pool.query('SELECT * FROM stock', (error, results) => {
    if (error) {
      throw error
    }
    console.log('rows::: ' + results.rows)
    console.log('rows2::: ' + JSON.stringify(results.rows))
  })
}

setTimeout(function() {
	getUsers()
}, 5000);