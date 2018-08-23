const db = require('../../db/db_connection');

// Get single article details
    // get all info where article_id = id

    const getArticleDetail = (id) => {
        db.query (  
        `SELECT * FROM articles WHERE id = '${id}'`
    )
    .then(res => console.log('Queried article detail', res))
    .catch(err => console.error('error!', err))
}

// getArticleDetail(1);

module.exports = getArticleDetail;