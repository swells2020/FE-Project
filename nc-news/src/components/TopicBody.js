import { useEffect, useState } from "react"
import {
    Routes,
    Route,
    Link,
} from 'react-router-dom';
import { fetchTopics } from "../api";
import ArticleList from "./ArticleList";
import TopicCard from "./TopicCard";

export default function TopicBody() {

    const [topicsState, setTopicsState] = useState()
    const [loadingState, setLoadingState] = useState(true);

    useEffect(() => {
        fetchTopics()
            .then((topics) => {
                setTopicsState(topics);
                setLoadingState(false);
            })
    },
        [])

    if (loadingState) {
        return <p>Loading...</p>
    } else {
        return (
            <section>
                <h2>Topics</h2>
                <section className="TopicBody-TopicTiles">{topicsState.map(topic => {
                    const path = `/topics/${topic.slug}`
                    return (
                        <Link key={topic.slug} className="TopicCard" to={path}>
                            <TopicCard topic={topic} />
                        </Link>
                    )
                })}</section>
                <section>
                    <Routes>
                        <Route path='/:topic' element={<ArticleList />} />
                    </Routes>
                </section>
            </section>
        )

    }
}




