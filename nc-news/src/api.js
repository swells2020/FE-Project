import axios from 'axios';

export function fetchArticles() {
    return axios.get('https://callums-be-project.herokuapp.com/api/articles')
        .then(({ data: { articles } }) => {

            return articles;
        })
};