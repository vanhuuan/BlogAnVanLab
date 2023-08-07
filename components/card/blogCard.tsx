"use client";

import { getStaicLink } from "@/hooks/getLink";
import { Locale } from "@/i18next.config";
import { BlogCardData } from "@/viewmodels/CardData";

export default function BlogCard({ card }: { card: BlogCardData }) {

    const genLink = getStaicLink();

    return (<a className="group shadow-xl hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/[.05]"
        href={genLink(`/topics/blogs/${card.id}`)}>
        <div className="aspect-w-16 aspect-h-10 p-3">
            <img
                className="w-full object-cover rounded-xl"
                src={card.slug}
                alt="Image Description"
            />
        </div>
        <h3 className="mt-5 text-xl text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
            {card.name} - {card.description}
        </h3>
        <div>
            <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-blue-50 text-gray-700 m-1 ml-0">C#</span>
            <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-blue-50 text-gray-700 m-1 ml-0">Learning</span>
        </div>
        <p className="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
            Xem thêm
            <svg
                className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                    fill="currentColor" />
            </svg>
        </p>
    </a>)
}