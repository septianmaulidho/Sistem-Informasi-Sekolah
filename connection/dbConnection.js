const mysql = require('mysql')
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, NODE_ENV } = process.env
const knexfile = require('../knexfile')
// const db = require('knex')({
//     client: 'mysql',
//     connection: {
//         host: DB_HOST,
//         user: DB_USER,
//         password: DB_PASSWORD,
//         database: DB_DATABASE
//     }
// })

// db.raw(` SELECT "Mysql connected..." message`)
//     .then(result => {
//         console.log(result[0][0].message);
//     })
//     .catch(err => {
//         throw err
//     })

const db = require('knex')(knexfile[NODE_ENV]);

module.exports = db