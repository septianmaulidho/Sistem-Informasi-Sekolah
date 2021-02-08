const db = require("../connection/dbConnection");
const _ = require('lodash')
const humps = require('humps');
const { v4 } = require("uuid");

class Controller {
    constructor(tablename) {
        this.tablename = tablename
    }

    camelKey(object) {
        return humps.decamelizeKeys(object)
    }

    jadiOnta(object) {
        return humps.camelizeKeys(object)
    }

    plainObject(object) {
        return _.toPlainObject(object)
    }

    async get(query) {
        let results;
        if (!query) {
            results = await db(this.tablename)
                .catch(err => {
                    return err
                })
        }
        else {
            results = await db(this.tablename).where(this.camelKey(query))
                .catch(err => {
                    return err
                })
        }

        return results.map(result => {
            this.plainObject(result)
            return humps.camelizeKeys(this.plainObject(result))
        })
    }

    async add(body) {
        body.id = v4()
        const results = await db(this.tablename).insert(this.camelKey(body))
            .catch(err => {
                throw err
            })
        // return results[0] // result == [0]
        return body
    }

    async edit(id, body) {
        const results = await db(this.tablename).update(this.camelKey(body)).where({ id })
            .catch(err => {
                throw err
            })
        return results // result == 1
        // return body
    }

    async remove(id) {
        const results = await db(this.tablename).delete().where({ id })
            .catch(err => {
                throw err
            })
        return results // result == 1
    }

}

module.exports = Controller