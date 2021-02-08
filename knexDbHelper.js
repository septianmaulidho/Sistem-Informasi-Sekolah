require('dotenv').config()
const { DB_ROOT_USER, DB_ROOT_PASSWORD, DB_DATABASE, DB_DATABASE_TEST, NODE_ENV, RUN_CREATE_DB, RUN_DROP_DB } = process.env
const knexfile = require('./knexfile')

let dbManager = require('knex-db-manager').databaseManagerFactory({
  knex: knexfile[NODE_ENV],
  dbManager: {
    superUser: DB_ROOT_USER,
    superPassword: DB_ROOT_PASSWORD
  },
});

async function createDb(dbName) {
  try {
    await dbManager.createDbOwnerIfNotExist()
    await dbManager.createDb(dbName)
    await dbManager.close()
  } catch (error) {
    console.log(error);
  }
}

async function dropDb() {
  await dbManager.dropDb()
  await dbManager.close()
}

if (RUN_CREATE_DB) {
  createDb(DB_DATABASE_TEST)
    .catch(console.log)
    .finally(() => {
      process.exit(0)
    })
}

if (RUN_DROP_DB) {
  dropDb(DB_DATABASE_TEST)
    .catch(console.log)
    .finally(() => {
      process.exit(0)
    })
}