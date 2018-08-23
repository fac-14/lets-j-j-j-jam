const db = require('../../db/db_connection');

// Function to get articles for a topic
// take in topic name
    // get topic id from name
        // get all articles where topic_id = topic

        const getArticles = (topicId) => {
            db.query (
                `SELECT * FROM articles INNER JOIN topics ON articles.topic_id = topics.id WHERE articles.topic_id = '${topicId}'` 
            )
            .then(res => console.log('getting articles', res))
            .catch(err => console.error('error!', err))
        }

        getArticles(11);

        module.exports = getArticles;