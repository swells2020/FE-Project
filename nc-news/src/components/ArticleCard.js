export default function ArticleCard({ article }) {

    return (
        <section className="ArticleCard">
            <h2 className="ArticleCard-Topic">{article.topic}</h2>
            <h3 className="ArticleCard-Header">{article.title}</h3>
            <div className="ArticleCard-Author">
                <label for='ArticleCard-Author'>Author: </label><p id='ArticleCard-Author'>{article.author}</p>
            </div>
            <div className="ArticleCard-Detail">
                <label for='ArticleCard-Votes'>Votes:</label><p id='ArticleCard-Votes'>{article.votes}</p><br />
                <label for='ArticleCard-Comments'>Comments:</label><p id='ArticleCard-Comments'>{article.comment_count}</p><br />
            </div>
        </section>
    )
}