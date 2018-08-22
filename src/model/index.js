const addUser = require('./addUser');
const getArticleDetail = require('./getArticleDetail');
const getArticles = require('./getArticles');
const getTopics = require('./getTopics');
const loginCheck = require('./loginCheck');

module.exports = {
    addUser: addUser,
    getArticleDetail: getArticleDetail,
    getArticles: getArticles,
    getTopics: getTopics,
    doesUserExist: loginCheck
};