import axios from 'axios';

export function fetchArticles(params) {
    let url = 'https://callums-be-project.herokuapp.com/api/articles'
    if (params){
        url = `https://callums-be-project.herokuapp.com/api/articles?topic=${params}`
    } 
    
    console.log(url)
    return axios.get(url)
        .then(({ data: { articles } }) => {

            return articles;
        })
};

// export function fetchArticle(article_id) {
//     return axios.get(`https://callums-be-project.herokuapp.com/api/articles/${article_id}`)
//         .then(({ data: { article } }) => {

//             return article;

export function fetchTopics() {
    return axios.get('https://callums-be-project.herokuapp.com/api/topics')
        .then(({ data: { topics } }) => {
    
            return topics;
        })
};