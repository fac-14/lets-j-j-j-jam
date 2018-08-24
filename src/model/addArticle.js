const db = require("../../db/db_connection");

const addArticle = articleData => {
  // console.log(articleData);
  const {
    title,
    article_url,
    topic,
    description,
    keywords,
    img_url
  } = articleData;
  const keywordsArr = keywords.toUpperCase().split(",");
  const user_id = 1;
  const sql_getTopicID = `SELECT id FROM topics WHERE topic_name='${topic}';`;
  
  db.query(sql_getTopicID)
  .then( res =>{
    const topic_id = res[0].id;
    const sql_addArticle = `INSERT INTO articles (title, link, topic_id, article_descr, keywords, img_url, user_id) VALUES ('${title}','${article_url}','${topic_id}','${description}','{${keywordsArr}}','${img_url}','${user_id}');`;
    db.query(sql_addArticle)
    .then(res => console.log("Added to DB!", res))
        .catch(e => console.log("epic fail", e));
    });
};

module.exports = addArticle;
