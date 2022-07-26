import { useParams } from 'react-router-dom'
import ArticlePage from './ArticlePage'

export default function ArticleBody() {
    const {article_id} = useParams()

    return (
            <ArticlePage article_id={article_id}/>
    )
}