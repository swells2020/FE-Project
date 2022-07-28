export default function TopicCard({topic}) {


    return (
        <section >
            <div className="TopicCard-Slug">
                {topic.slug}
            </div>
            <div className="TopicCard-Description">
                {topic.description}
            </div>
        </section>
    )
}