import axios from 'axios';

export function articlesApi() {
    return axios.get('https://callums-be-project.herokuapp.com/api/articles')
        .then(({ data: { articles } }) => {

            return articles;
        })
};