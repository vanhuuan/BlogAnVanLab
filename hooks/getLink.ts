import { Locale } from '@/i18next.config'
import { usePathname } from 'next/navigation'
export const getStaicLink = () => {
    const pathname = usePathname()

    const lang = pathname.split("/")[1]

    return (path: String) => `/${lang}${path}`
}

export const getDynamicLink = ({lang}: {lang: Locale}) => {
    return (path: String) => `/${lang}${path}`
}