const db = require('../../db/db_connection');

// Get single article details
    // get all info where article_id = id

    const getArticleDetail = (name) => {
        db.query (  
        `SELECT * FROM articles INNER JOIN topics ON articles.topic_id = topics.id WHERE topics.topic_name = '${name}'`
    )
    .then(res => console.log('Queried article detail', res))
    .catch(err => console.error('error!', err))
}

// getArticleDetail(1);

module.exports = getArticleDetail;