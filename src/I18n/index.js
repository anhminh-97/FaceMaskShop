import { initReactI18next } from 'react-i18next'

import i18n from 'i18next'
import en from './en'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    defaultNS: 'common',
    resources: { en, vi: {} },
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
