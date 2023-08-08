import { ThemeSwitcher } from "../theme/themeSwitcher";
import { Locale } from "@/i18next.config";
import { getDictionary } from "@/get-dictionary";
import LocateSwitcher from "../theme/locateSwitcher";
import { getDynamicLink } from "@/hooks/getLink";
import Script from "next/script";

export default async function Header({ lang }: { lang: Locale }) {
  const language = await getDictionary(lang);
  const genLink = getDynamicLink({ lang: lang });

  const HeaderBar = [
    {
      title: "Giới thiệu",
      link: genLink("/about"),
    },
    {
      title: "Chủ đề",
      link: genLink("/topics"),
    },
    {
      title: "Tìm kiếm",
      link: genLink("/search"),
    },
  ];

  language.header.menu.forEach((e, index) => {
    HeaderBar[index] = {
      title: e,
      link: HeaderBar[index].link,
    };
  });

  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
      <nav
        className="mt-6 relative max-w-7xl w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700"
        aria-label="Global"
      >
        <Script src="https://cdn.jsdelivr.net/npm/@preline/collapse@1.3.0/index.min.js" />
        <div className="flex items-center justify-between">
          <a
            className="flex-none text-xl font-semibold dark:text-white"
            href="/"
            aria-label="Brand"
          >
            AnVanLab
          </a>
          <div className="hidden mx-auto sm:block border rounded-md border-gray-400 dark:border-gray-100 ml-10">
            <label htmlFor="icon" className="sr-only">
              {language.header.search}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
                <svg
                  className="h-4 w-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
              <input
                type="text"
                id="icon"
                name="icon"
                className="py-2 px-4 pl-11 pr-20 block w-92 md:w-96 bg-transparent border-gray-700 shadow-sm rounded-md text-sm text-black-300 focus:z-10 focus:border-gray-900 focus:ring-gray-600 placeholder:text-gray-500"
                placeholder={language.header.search}
              />
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">
            {HeaderBar.map((e, index) => {
              return (
                <a
                  key={index}
                  className="font-medium text-gray-500 hover:text-gray-600 md:py-6 dark:text-gray-100 dark:hover:text-gray-500"
                  href={e.link}
                >
                  {e.title}
                </a>
              );
            })}
            {/* <a className="font-medium text-blue-600 md:py-6 dark:text-blue-500" href="#" aria-current="page">Landing</a> */}
            <ThemeSwitcher />
            <LocateSwitcher lang={lang} />
            <a
              className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-gay-800 md:border-l md:border-gray-300 md:my-6 md:pl-6 dark:border-gray-700 dark:text-gray-100 dark:hover:text-gray-500"
              href="/auth/login"
            >
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
              {language.header.login}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
