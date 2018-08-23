const db = require("../../db/db_connection");

const addArticle = (articleData) => {
  console.log(articleData);
  const { title, article_url, topic, description, keywords, img_url } = articleData;
  const keywordsArr = keywords.split(",");
  const user_id = 1;
  const topic_id = 2;
  const sql = `INSERT INTO articles (title, link, topic_id, article_descr, keywords, img_url, user_id) VALUES ('${title}','${article_url}','${topic_id}','${description}','{${keywordsArr}}','${img_url}','${user_id}');`

  db.query(sql) 
    .then(res => console.log('Added to DB!',res))
    .catch(e => console.log('epic fail',e));
}


module.exports = addArticle;