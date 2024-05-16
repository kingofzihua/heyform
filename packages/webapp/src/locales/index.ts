import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { locales } from '@/pages/form/views/FormComponents'

import en from './en'
import pl from './pl'
import zhCn from './zhCn'
import zhTw from './zhTw'

const resources = {
  en: {
    translation: {
      ...en,
      ...locales.en.translation
    }
  },
	pl: {
    translation: {
      ...pl,
      ...locales.pl.translation
    }
  },
  'zh-cn': {
    translation: {
      ...zhCn,
      ...locales['zh-cn'].translation
    }
  },
  'zh-tw': {
    translation: {
      ...zhTw,
      ...locales['zh-tw'].translation
    }
  },
  fr: locales.fr,
  de: locales.de
}
const supportedLngs = Object.keys(resources)

i18n.use(initReactI18next).init({
  lowerCaseLng: true,
  resources,
  lng: 'en',
  fallbackLng: supportedLngs[0],
  supportedLngs,
  interpolation: {
    escapeValue: false
  },
  react: {
    // https://react.i18next.com/latest/trans-component#trans-props
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'b', 'i', 'a']
  }
})

export default i18n
