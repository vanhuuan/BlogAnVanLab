export default function HeaderBlogCard() {

    const copyToClipboard = () => {
        const currentUrl = window.location.href;
    
        // Check if the browser supports the Clipboard API
        if (navigator.clipboard) {
          navigator.clipboard.writeText(currentUrl)
            .then(() => {
                console.log('Copied', currentUrl);
            })
            .catch((error) => {
              console.error('Failed to copy URL to clipboard:', error);
            });
        }
    }

    return <div className="flex justify-between items-center mb-6">
        <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
            <div className="flex-shrink-0">
                <img className="h-12 w-12 rounded-full"
                    src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Image Description" />
            </div>

            <div className="grow">
                <div className="grid sm:flex sm:justify-between sm:items-center gap-2">
                    <div>
                        <div className="hs-tooltip inline-block [--trigger:hover] [--placement:bottom]">
                            <div className="hs-tooltip-toggle sm:mb-1 block text-left cursor-pointer">
                                <span className="font-semibold text-gray-800 dark:text-gray-200">
                                    Leyla Ludic
                                </span>

                                <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 max-w-xs cursor-default bg-gray-900 divide-y divide-gray-700 shadow-lg rounded-xl dark:bg-black" role="tooltip">

                                    <div className="p-4 sm:p-5">
                                        <div className="mb-2 flex w-full sm:items-center gap-x-5 sm:gap-x-3">
                                            <div className="flex-shrink-0">
                                                <img className="h-8 w-8 rounded-full"
                                                    src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                                    alt="Image Description" />
                                            </div>

                                            <div className="grow">
                                                <p className="text-lg font-semibold text-gray-200">
                                                    Leyla Ludic
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-400">
                                            Leyla is a Customer Success Specialist at Preline and spends her time speaking to in-house recruiters all over the world.
                                        </p>
                                    </div>
                                    <div className="flex justify-between items-center px-4 py-3 sm:px-5">
                                        <ul className="text-xs space-x-3">
                                            <li className="inline-block">
                                                <span className="font-semibold text-gray-200">56</span>
                                                <span className="text-gray-400">articles</span>
                                            </li>
                                            <li className="inline-block">
                                                <span className="font-semibold text-gray-200">1k+</span>
                                                <span className="text-gray-400">followers</span>
                                            </li>
                                        </ul>

                                        <div>
                                            <button type="button" className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-1.5 rounded-md border border-transparent font-semibold bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 text-xs">
                                                <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                    <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                                                </svg>
                                                Follow
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ul className="text-xs text-gray-500">
                            <li className="inline-block relative pr-6 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                                Jan 18
                            </li>
                            <li className="inline-block relative pr-6 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                                8 min read
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button type="button" 
                        onClick={copyToClipboard}
                        className="py-1.5 px-2.5 sm:py-2 sm:px-3 inline-flex justify-center items-center gap-x-1.5 sm:gap-x-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-xs sm:text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                            Chia sẻ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}