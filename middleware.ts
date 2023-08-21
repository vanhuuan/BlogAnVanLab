import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "./i18next.config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { getErrorResponse } from "./lib/helpers";
import { verifyJWT } from "./lib/token";
import AuthRoute from "./dictionaries/authRoute";

const isAuthPages = (pathname: string) => AuthRoute.some(page => {
  if (pathname.startsWith("/api")) {
    page.startsWith(pathname)
  } else {
    page.startsWith(pathname.substring(3))
  }

})

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

interface AuthenticatedRequest extends NextRequest {
  user: {
    id: string;
  };
}

export async function middleware(request: NextRequest) {
  const nextPathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !nextPathname.startsWith(`/${locale}/`) && nextPathname !== `/${locale}`
  );

  var defaultLang = request.cookies.get("lang")?.value;
  // Redirect if there is no locale
  if (pathnameIsMissingLocale && !nextPathname.startsWith("/api")) {
    const locale = getLocale(request);
    if (defaultLang != undefined) {
      return NextResponse.redirect(
        new URL(
          `/${defaultLang}${nextPathname.startsWith("/") ? "" : "/"
          }${nextPathname}`,
          request.url
        )
      );
    }

    const res = NextResponse.redirect(
      new URL(
        `/${locale}${nextPathname.startsWith("/") ? "" : "/"}${nextPathname}`,
        request.url
      )
    );
    res.cookies.set('lang', locale!)
    return res
  }

  let redirectToLogin = false;
  const response = NextResponse.next()
  const urlLang = nextPathname.split("/")[1]

  if (urlLang != defaultLang) {
    defaultLang = urlLang
    response.cookies.set('lang', urlLang)
  }

  let token: string | undefined;

  if (request.cookies.has("token")) {
    token = request.cookies.get("token")?.value;
  } else if (request.headers.get("Authorization")?.startsWith("Bearer ")) {
    token = request.headers.get("Authorization")?.substring(7);
  }

  if (!token && isAuthPages(request.nextUrl.pathname)) {
    try {
      if (token) {
        const { sub } = await verifyJWT<{ sub: string }>(token);
        response.headers.set("X-USER-ID", sub);
        (request as AuthenticatedRequest).user = { id: sub };
      }
    } catch (error) {
      redirectToLogin = true;
      if (request.nextUrl.pathname.startsWith("/api")) {
        return getErrorResponse(401, "Token is invalid or user doesn't exists");
      }

      return NextResponse.redirect(
        new URL(`/${defaultLang}/auth/login?${new URLSearchParams({ error: "bad auth" })}`, request.url)
      );
    }

    const authUser = (request as AuthenticatedRequest).user;

    if (!authUser) {
      return NextResponse.redirect(
        new URL(
          `/${defaultLang}/auth/login?${new URLSearchParams({
            error: "bad auth",
            forceLogin: "true",
          })}`,
          request.url
        )
      );
    }

    if (request.url.includes(`/${defaultLang}/auth/login`) && authUser) {
      return NextResponse.redirect(new URL(`/${defaultLang}/profile`, request.url));
    }

    return response
  }
}

export const config = {
  // do not localize next.js paths
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};
