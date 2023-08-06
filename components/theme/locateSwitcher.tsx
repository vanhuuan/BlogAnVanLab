"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Locale, i18n } from "@/i18next.config";
import { English, VietNameIcon } from "./languageIcon";

export default function LocateSwitcher({lang}: {lang: Locale}) {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };
  return (
      <a
        className={`w-fit right-5 top-2 p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933]`}
        href = {redirectedPathName(lang == "vi" ? "en" : "vi")}
      >
        {lang == "vi" ? <VietNameIcon /> : <English />}
      </a>
  );
}
