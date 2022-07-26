import axios from 'axios';

export function fetchArticles() {
    return axios.get('https://callums-be-project.herokuapp.com/api/articles')
        .then(({ data: { articles } }) => {

            return articles;
        })
};

export function fetchArticle(article_id) {
    return axios.get(`https://callums-be-project.herokuapp.com/api/articles/${article_id}`)
        .then(({ data: { article } }) => {

            return article;
        })
};