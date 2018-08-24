const db = require("../../db/db_connection");

const getName = (name) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM users WHERE name='${name}';`)
            .then(res => {
                resolve(res)
            })
            .catch(err => reject(err))

    })
}

module.exports = getName;