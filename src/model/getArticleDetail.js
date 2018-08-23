const db = require("../../db/db_connection");

// Get single article details
// get all info where article_id = id

const getArticleDetail = id => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM articles WHERE id = '${id}'`)
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

// getArticleDetail(1);

module.exports = getArticleDetail;
