import { useState, useEffect } from "react";

import { fetchArticle, patchArticle } from "../api";

export default function ArticlePage({ article_id }) {
    const [articleState, setArticleState] = useState({});
    const [loadingState, setLoadingState] = useState(true);

    const changeVotes = (voteChange) => {
        let newArticleState = { ...articleState }
        newArticleState.votes += voteChange
        setArticleState(newArticleState)

        patchArticle(article_id, { votes: voteChange })
            .then((article) => {
                return article;
            })
            .catch(error => {
                window.alert('Could not communicate with server, please try again later.')
            })
    }

    useEffect(() => {
        fetchArticle(article_id)
            .then((article) => {
                setArticleState(article)
                setLoadingState(false)
            })
    },
        [article_id])


    if (loadingState) {
        return <p>Loading...</p>
    } else {
        return (
            <section className="ArticlePage">
                <h2 className="ArticlePage-Topic">{articleState.topic}</h2>
                <h3 className="ArticlePage-Header">{articleState.title}</h3>
                <div className="Articlepage-Author">
                    <label htmlFor='ArticlePage-Author'>Author: </label><p id='ArticlePage-Author'>{articleState.author}</p>
                </div>
                <div className="ArtclePage-Details">
                    <div className="ArticlePage-VotesDiv">
                        <button onClick={() => { changeVotes(1) }}>⬆️</button><label htmlFor='ArticlePage-Votes'>Votes:</label><p id='ArticlePage-Votes'>{articleState.votes}</p><button onClick={() => { changeVotes(-1) }}>⬇️</button><br />
                    </div>
                    <label htmlFor='ArticlePage-Comments'>Comments:</label><p id='ArticlePage-Comments'>{articleState.comment_count}</p><br />
                </div>
                <div className="ArtclePage-Body">
                    <p className="ArticlePage-Body">{articleState.body}</p>
                </div>

            </section>
        )
    }
}
