const fs = require('fs');

const dbDconnection = require('./db_connection');

const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

//Used a promise instead of error-first callback

dbDconnection
    .query(sql)
    .then(res => console.log('Tables created', res ))
    .catch(err => console.error('error', err));