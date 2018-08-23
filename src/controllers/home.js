const queries = require('../model/index')

exports.get = (req, res) => {
  queries.getTopics()
    .then(allTopics => {
      res.render("home", { activePage: { home: true }, topics: allTopics });
    })
    .catch(e => console.log(e));
};
