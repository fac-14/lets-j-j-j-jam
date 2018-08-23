const db = require("../../db/db_connection");
const bcrypt = require("bcryptjs");

// Register:
// Write user details to user table

const addUser = object => {
  const name = object.name;
  const email = object.email;
  bcrypt.hash(object.password, 10, (err, hash) => {
    if (err) console.log("Error hashing pw: ", err);
    else {
      console.log("Successful hash");
      const sql = `INSERT INTO users (name, password, email) VALUES ('${name}','${hash}','${email}');`;
      db.query(sql)
        .then(res => console.log("successful update!", res))
        .catch(e => console.log("error updating database", e));
    }
  });
};

module.exports = addUser;
