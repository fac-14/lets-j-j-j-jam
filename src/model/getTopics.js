const db = require('../../db/db_connection');

const getTopics = ( ) => {
    db.query(
    `SELECT * FROM topics`
    )
    .then(res => console.log('Queried topics', res))
    .catch(err => console.error('error!', err))
}

getTopics();

module.exports = getTopics;
// module.exports = db.query(
//     `SELECT * FROM topics` 
// );