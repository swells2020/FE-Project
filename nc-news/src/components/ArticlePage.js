import { useState, useEffect } from "react";

import { articleApi } from "../api";

export default function ArticlePage({ article_id }) {
    const [articleState, setArticleState] = useState({});
    const [loadingState, setLoadingState] = useState(true);

    useEffect(() => {
        articleApi(article_id)
            .then((article) => {
                setArticleState(article)
                setLoadingState(false)
            })
    },
        [])
        
    return (

        <section className="ArticlePage">
            <h2 className="ArticlePage-Topic">{articleState.topic}</h2>
            <h3 className="ArticlePage-Header">{articleState.title}</h3>
            <div className="ArticlePage-Author">
                <label for='ArticlePage-Author'>Author: </label><p id='ArticleCard-Author'>{articleState.author}</p>
            </div>
            <div className="ArticlePage-Detail">
                <label for='ArticlePard-Votes'>Votes:</label><p id='ArticleCard-Votes'>{articleState.votes}</p><br />
                <label for='ArticlePard-Comments'>Comments:</label><p id='ArticleCard-Comments'>{articleState.comment_count}</p><br />
            </div>
        </section>
    )
}