const addUser = require('./addUser');
const getArticleDetail = require('./getArticleDetail');
const getArticles = require('./getArticles');
const getTopics = require('./getTopics');
const loginCheck = require('./loginCheck');
const addArticle = require('./addArticle');
const getName = require('./getName');

module.exports = {
    addUser: addUser,
    getArticleDetail: getArticleDetail,
    getArticles: getArticles,
    getTopics: getTopics,
    checkPassword: loginCheck,
    addArticle: addArticle,
    getName: getName
};