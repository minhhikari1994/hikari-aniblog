import enTerms from './en.json'
import viTerms from './vi.json'

export default defineI18nConfig(() => ({
    legacy: false,
    locales: ['vi', 'en'],
    messages: {
      en: enTerms,
      vi: viTerms
    }
}))
