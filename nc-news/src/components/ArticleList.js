import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { fetchArticles } from '../api'
import ArticleCard from './ArticleCard'

export default function ArticleList() {
    const [articlesState, setArticlesState] = useState([]);
    const [loadingState, setLoadingState] = useState(true);

    useEffect(() => {
        fetchArticles()
            .then((articles) => {
                setArticlesState(articles)
                setLoadingState(false)
            })
    },
        [])

    if (loadingState) {
        return <p>Loading...</p>
    } else {
        return (
            <section className='ArticleList'>
                <h2>Articles</h2>
                <section className='ArticleCards'>
                    {articlesState.map(article => {
                        return (
                            <Link className='ArticleCard' to={`/articles/${article.article_id}`}>
                                <ArticleCard key={article.article_id} article={article} />
                            </Link>
                        )
                    })}
                </section>
            </section>
        )
    }
}