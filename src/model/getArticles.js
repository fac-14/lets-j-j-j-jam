const db = require("../../db/db_connection");

// Function to get articles for a topic
// take in topic name
// get topic id from name
// get all articles where topic_id = topic

const getArticles = topicName => {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT articles.id, articles.title FROM articles INNER JOIN topics ON articles.topic_id = topics.id WHERE topics.topic_name = '${topicName}'`
    )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

// getArticles(11);

module.exports = getArticles;
