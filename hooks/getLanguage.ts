import { Locale } from '@/i18next.config'
import { usePathname } from 'next/navigation'

export const getStaicLanguage = () : Locale => {
    const pathname = usePathname()

    const lang = pathname.split("/")[1]

    return lang === "vi" ? "vi" : "en"
}