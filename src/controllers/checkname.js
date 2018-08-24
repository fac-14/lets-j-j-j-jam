const queries = require('../model/index')

exports.get = (req, res) => {
  const { name } = req.params;
  queries.getName(name)
    .then(resolve => {
      const obj = { usernameExists: null };
      if (resolve.length >= 1) {
        obj.usernameExists = true;
      } else {
        obj.usernameExists = false;
      }
      res.send(obj)
    })
    .catch(e => console.log(e));
};