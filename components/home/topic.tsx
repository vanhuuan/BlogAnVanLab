import TopicCard from "../card/topicCard";
import { TopicCardData } from "@/viewmodels/CardData";
export default function Topics() {
  const languages = [
    "https://en.wikipedia.org/wiki/C_Sharp_%28programming_language%29#/media/File:C_Sharp_wordmark.svg",
    "https://pbs.twimg.com/profile_images/1390448160934305793/ohii8Hxq_400x400.png",
    "https://play.google.com/store/apps/details?id=com.sorincovor.javascript_editor&hl=en_US",
    "https://vi.wikipedia.org/wiki/React#/media/T%E1%BA%ADp_tin:React-icon.svg",
    "https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo.png",
  ];
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mb-10">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Chủ đề nổi bật
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 bg-white dark:bg-gray-800">
        {languages.map((e, index) => {
          const card: TopicCardData = {
            name: "Topic",
            description: "Miêu tả topic",
            slug: "https://cdn-icons-png.flaticon.com/512/2621/2621040.png",
          };
          return <TopicCard {...card} key={index} />;
        })}
      </div>

      <div className="text-center mt-10">
        <div className="inline-block bg-white border shadow-sm rounded-full dark:bg-slate-900 dark:border-gray-800">
          <div className="py-3 px-4 flex items-center gap-x-2">
            <p className="text-gray-600 dark:text-gray-400">
              Xem thêm nhiều chủ đề hơn.
            </p>
            <a
              className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
              href="/topics"
            >
              Đến xem
              <svg
                className="w-2.5 h-2.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
