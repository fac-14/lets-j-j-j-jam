const queries = require("../model/index");

exports.get = (req, res) => {
  const { id } = req.params;
  queries.getArticleDetail(parseInt(id)).then(resolve => {
    console.log(resolve);
    res.render("article", { article: resolve[0] });
  });
};
