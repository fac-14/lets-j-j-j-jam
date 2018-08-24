const db = require("../../db/db_connection");
const bcrypt = require("bcryptjs");
const checkUser = object => {
  return new Promise((resolve, reject) => {
    const name = object.name;
    const password = object.password;
    db.query(`SELECT password FROM users WHERE name = '${name}';`)
      .then(res => {
        if (res.length < 1) {
          reject("user not found");
        } else {
          const hash = res[0].password;
          bcrypt.compare(password, hash, (err, res) => {
            if (err) reject(`error hashing pw: ${err}`);
            else {
            //   console.log("password is valid?: ", res);
              resolve(res);
            }
          });
        }
      })
      .catch(e => reject(`Couldn't update db: ${e}`));
  });
};

module.exports = checkUser;
// Log in:
// get user data where name = username inputted
// compare hashed input to hashed password
// return true/false?
