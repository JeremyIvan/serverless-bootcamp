require("dotenv").config()

const config = {
    PG_DATABASE_USER: process.env.PG_DATABASE_USER,
    PG_DATABASE_HOST: process.env.PG_DATABASE_HOST,
    PG_DATABASE_NAME: process.env.PG_DATABASE_NAME,
    PG_DATABASE_PASSWORD: process.env.PG_DATABASE_PASSWORD,
    PG_DATABASE_PORT: process.env.PG_DATABASE_PORT,
}

module.exports = config