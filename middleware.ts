import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "./i18next.config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

export function middleware(request: NextRequest) {
  const nextPathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !nextPathname.startsWith(`/${locale}/`) && nextPathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    const defaultLang = request.cookies.get("lang")?.value;

    if (defaultLang != undefined) {
      return NextResponse.redirect(
        new URL(
          `/${defaultLang}${nextPathname.startsWith("/") ? "" : "/"
          }${nextPathname}`,
          request.url
        )
      );
    }

    request.cookies.set({ name: "lang", value: locale! })
    return NextResponse.redirect(
      new URL(
        `/${locale}${nextPathname.startsWith("/") ? "" : "/"}${nextPathname}`,
        request.url
      )
    );
  }
}

export const config = {
  // do not localize next.js paths
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};
