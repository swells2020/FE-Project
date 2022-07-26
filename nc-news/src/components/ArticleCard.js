export default function ArticleCard({ article }) {

    return (
        <section className="ArticleCard">
            <h2 className="ArticleCard-Topic">{article.topic}</h2>
            <h3 className="ArticleCard-Header">{article.title}</h3>
            <div className="ArticleCard-Author">
                <label for='ArticleCard-Author'>Author: </label><p id='ArticleCard-Author'>{article.author}</p>
            </div>
            <div className="ArticleCard-Detail">
                <p id='ArticleCard-Votes'>{article.votes} votes</p><br />
                <p id='ArticleCard-Comments'>{article.comment_count} comments</p><br />
            </div>
        </section>
    )
}