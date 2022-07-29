import { useState, useEffect } from "react";

import { fetchArticle } from "../api";

export default function ArticlePage({ article_id }) {
    const [articleState, setArticleState] = useState({});
    const [loadingState, setLoadingState] = useState(true);

    useEffect(() => {
        fetchArticle(article_id)
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
            <div className="Articlepage-Author">
                    <label for='ArticlePage-Author'>Author: </label><p id='ArticlePage-Author'>{articleState.author}</p>
            </div>
                <div className="ArtclePage-Details">
                    <label for='ArticlePard-Votes'>Votes:</label><p id='ArticlePage-Votes'>{articleState.votes}</p><br />
                    <label for='ArticlePard-Comments'>Comments:</label><p id='ArticlePage-Comments'>{articleState.comment_count}</p><br />
                </div>
                <div className="ArtclePage-Body">
                    <p className="ArticlePage-Body">{articleState.body}</p>
                </div>

        </section>
    )
}