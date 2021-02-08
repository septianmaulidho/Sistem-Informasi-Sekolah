// created by npm run knex:init
require('dotenv').config()
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE, DB_DATABASE_TEST, DB_DIALECT } = process.env

module.exports = {
  development: {
    client: DB_DIALECT,
    connection: {
      database: DB_DATABASE,
      user: DB_USER,
      password: DB_PASSWORD,
      host: DB_HOST
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: 'migrations'
    }
  },
  test: {
    client: DB_DIALECT,
    connection: {
      database: DB_DATABASE_TEST,
      user: DB_USER,
      password: DB_PASSWORD,
      host: DB_HOST
    },
    migrations: {
      directory: 'migrations'
    }
  },
  production: {
    client: DB_DIALECT,
    connection: {
      database: DB_DATABASE,
      user: DB_USER,
      password: DB_PASSWORD,
      host: DB_HOST
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: 'migrations'
    }
  }
};