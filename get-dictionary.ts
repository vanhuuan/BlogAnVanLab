import type { Locale } from './i18next.config'

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  vi: () => import('./dictionaries/vi.json').then((module) => module.default),
  en: () => import('./dictionaries/en.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]?.() ?? dictionaries.vi()