import { useEffect, useState } from 'react'

import { articlesApi } from '../api'
import ArticleCard from './ArticleCard'

export default function ArticleList() {
    const [articlesState, setArticlesState] = useState([]);
    const [loadingState, setLoadingState] = useState(true);

    useEffect(() => {
        articlesApi()
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
                        return <ArticleCard key={article.article_id} article={article} />
                    })}
                </section>
            </section>
        )
    }
}