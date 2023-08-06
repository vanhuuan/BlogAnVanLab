import { Locale } from "@/i18next.config";

const getLink = async (lang: Locale) => {

    return (path: String) => `/${lang}${path}`
}

export default getLink