const queries = require("../model/index");

exports.get = (req, res) => {
  const { topic } = req.params;
  queries
    .getArticles(topic)
    .then(resolve => {
      res.render("topic", {
        articles: resolve,
        topic: topic
      });
    })
    .catch(err => console.error(err));
};
