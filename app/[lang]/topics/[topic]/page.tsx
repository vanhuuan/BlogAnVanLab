import BlogCard from "@/components/card/blogCard";
import { BlogCardData } from "@/viewmodels/CardData";

const imgExample = [
    "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    "https://images.unsplash.com/photo-1669739432571-aee1f057c41f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80",
    "https://images.unsplash.com/photo-1657299171054-e679f630a776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
];


export default function BlogTopic({ params }: { params: { id: string } }) {
    console.log(params)
    // return <>
    //     Blog &apos; s Topics <br />
    //     <a href="/topics/blogs/123">Xem 1 topic</a>
    // </>

    return (
        <div className="relative overflow-hidden">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 dark:text-gray-200">
                        C#
                    </h1>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">
                        Danh sách bài viết của chủ đề
                    </p>
                    <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
                        {/* Form */}
                        <form>
                            <div className="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900/[.2]">
                                <div className="flex-[1_0_0%]">
                                    <label
                                        htmlFor="hs-search-article-1"
                                        className="block text-sm text-gray-700 font-medium dark:text-white"
                                    >
                                        <span className="sr-only">Tìm kiếm bài viết</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="hs-search-article-1"
                                        id="hs-search-article-1"
                                        className="p-3 block w-full border-transparent rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-400"
                                        placeholder="Tìm kiếm bài viết"
                                    />
                                </div>
                                <div className="flex-[0_0_auto]">
                                    <a
                                        className="p-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                                        href="#"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 lg:py-14 mx-auto dark:bg-gray-700">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {imgExample.map((e, index) => {
                        const card: BlogCardData = {
                            slug: e,
                            name: "Tập 1, C# là gì",
                            description: "Giới thiệu về C# và viết chương trình đầu tiên với C#"
                        }
                        return (
                            <BlogCard key={index} card={card} />
                        );
                    })}
                </div>
            </div>
            </div>
        </div>
    )
}