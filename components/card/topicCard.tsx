import { TopicCardData } from "@/viewmodels/CardData";

export default function TopicCard(card: TopicCardData) {
  return (
    <a
      href="#"
      className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] hover:scale-105 ease-in duration-100"
    >
      <div className="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
        <svg
          className="w-28 h-28"
          width={56}
          height={56}
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width={56} height={56} rx={10} fill="white" />
          <path
            d="M20.2819 26.7478C20.1304 26.5495 19.9068 26.4194 19.6599 26.386C19.4131 26.3527 19.1631 26.4188 18.9647 26.5698C18.848 26.6622 18.7538 26.78 18.6894 26.9144L10.6019 43.1439C10.4874 43.3739 10.4686 43.6401 10.5496 43.884C10.6307 44.1279 10.805 44.3295 11.0342 44.4446C11.1681 44.5126 11.3163 44.5478 11.4664 44.5473H22.7343C22.9148 44.5519 23.0927 44.5037 23.2462 44.4084C23.3998 44.3132 23.5223 44.1751 23.5988 44.011C26.0307 38.9724 24.5566 31.3118 20.2819 26.7478Z"
            fill="url(#paint0_linear_2204_541)"
          />
          <path
            d="M28.2171 11.9791C26.201 15.0912 25.026 18.6755 24.8074 22.3805C24.5889 26.0854 25.3342 29.7837 26.9704 33.1126L32.403 44.0113C32.4833 44.1724 32.6067 44.3079 32.7593 44.4026C32.912 44.4973 33.088 44.5475 33.2675 44.5476H44.5331C44.6602 44.5479 44.7861 44.523 44.9035 44.4743C45.0209 44.4257 45.1276 44.3543 45.2175 44.2642C45.3073 44.1741 45.3785 44.067 45.427 43.9492C45.4755 43.8314 45.5003 43.7052 45.5 43.5777C45.5001 43.4274 45.4659 43.2791 45.3999 43.1441L29.8619 11.9746C29.7881 11.8184 29.6717 11.6864 29.5261 11.594C29.3805 11.5016 29.2118 11.4525 29.0395 11.4525C28.8672 11.4525 28.6984 11.5016 28.5529 11.594C28.4073 11.6864 28.2908 11.8184 28.2171 11.9746V11.9791Z"
            fill="#2684FF"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2204_541"
              x1="24.734"
              y1="29.2284"
              x2="16.1543"
              y2="44.0429"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0052CC" />
              <stop offset="0.92" stopColor="#2684FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="p-4 md:p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
          Javascript
        </h3>
        <span className="block mb-1 mt-2 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
          30 bài viết
        </span>
        <p className="mt-3 text-gray-500">
          Cung cấp các kiến thức về Javascript
        </p>
        <p className="mt-5 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
          Xem các bài viết
          <svg
            className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
              fill="currentColor"
            />
          </svg>
        </p>
      </div>
    </a>
  );
}
