const ServerlessClient = require('serverless-postgres')

const config = require("../config")

const client = new ServerlessClient({
  user: config.PG_DATABASE_USER,
  host: config.PG_DATABASE_HOST,
  database: config.PG_DATABASE_NAME,
  password: config.PG_DATABASE_PASSWORD,
  port: config.PG_DATABASE_PORT,
  debug: true,
  delayMs: 3000,
});

module.exports = { client }