const { Pool } = require('pg')

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  port: process.env.DB_PORT,
  database: "customer",
  password: process.env.DB_PASSWORD
})

module.exports = {
  query: (text, params) => pool.query(text, params),
}