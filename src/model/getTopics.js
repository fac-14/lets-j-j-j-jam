const db = require('../../db/db_connection');

const getTopics = ( ) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM topics;`)
            .then(res => {
                // console.log(res);
                resolve(res)
            })
            .catch(err => reject(err))

    })
}

// getTopics();

module.exports = getTopics;
// module.exports = db.query(
//     `SELECT * FROM topics` 
// );