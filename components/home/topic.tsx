import TopicCard from "../card/topicCard"

export default function Topics() {
    const languages = [
        "https://en.wikipedia.org/wiki/C_Sharp_%28programming_language%29#/media/File:C_Sharp_wordmark.svg",
        "https://pbs.twimg.com/profile_images/1390448160934305793/ohii8Hxq_400x400.png",
        "https://play.google.com/store/apps/details?id=com.sorincovor.javascript_editor&hl=en_US",
        "https://vi.wikipedia.org/wiki/React#/media/T%E1%BA%ADp_tin:React-icon.svg",
        "https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo.png"
    ]
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-2xl mb-10">
                <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Chủ đề nổi bậc</h2>
            </div>

            <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10 bg-white dark:bg-gray-800">
                {languages.map((e, index) => {
                    const card: TopicCardData = {
                        name: "Topic",
                        description: "Miêu tả topic",
                        slug: "https://cdn-icons-png.flaticon.com/512/2621/2621040.png"
                    }
                    return <TopicCard {...card} key={index} />
                })}

            </div>
        </div>)
}