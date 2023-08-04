const TopicCard: React.FC<TopicCardData> = (card) => {

    return <a className="group rounded-xl overflow-hidden shadow-xl p-4 border border-gray-200 dark:border-gray-700 dark:bg-gray-700" href="#">
        <div className="sm:flex">
            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <img className="w-full h-full absolute top-0 left-0 object-cover rounded-xl" src={card.slug} alt="Image Description" />
            </div>

            <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                    {card.name}
                </h3>
                <p className="mt-3 text-gray-600 dark:text-gray-400">
                    {card.description}
                </p>
                <p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                    Tìm hiểu ngay
                    <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth="2" stroke-linecap="round" />
                    </svg>
                </p>
            </div>
        </div>
    </a>
}
export default TopicCard