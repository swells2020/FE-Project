export default function ArticleCard({ article }) {

    return (
        <>
            <h3>{article.title}</h3>
            <label for='ArticleCard-Topic'>Topic:</label><p id='ArticleCard-Topic'>{article.topic}</p><br />
            <label for='ArticleCard-Author'>Author:</label><p id='ArticleCard-Author'>{article.author}</p><br />
            <label for='ArticleCard-Votes'>Votes:</label><p id='ArticleCard-Votes'>{article.votes}</p><br />
            <label for='ArticleCard-Comments'>Comments:</label><p id='ArticleCard-Comments'>{article.comment_count}</p><br />

        </>
    )
}