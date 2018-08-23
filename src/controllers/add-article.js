const queries = require('../model/index')

exports.get = (req, res) => {
  queries.getTopics()
    .then(allTopics => {
      res.render("add-article", { topic: allTopics });
    })
    .catch(e => console.log(e));
};
