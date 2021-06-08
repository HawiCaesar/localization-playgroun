import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { DateTime } from 'luxon'

import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
      format: (value, format, lng) => {
        if (value instanceof Date) {
          return DateTime.fromJSDate(value).setLocale(lng).toLocaleString(DateTime[format])
        }
        return value
      }
    },
    resources: {
      en: {
        translation: {
          description: {
            part1: 'Edit <1>src/App.js</1> and save to reload.',
            part2: 'Learn React',
          },
          counter: 'Changed languagesssddsrfefredewdew just once', 
          counter_plural: 'Changed language already {{count}} times',
          footer: {
            date: 'Today is {{date, DATE_HUGE}}'
          }
        },
      },
      sw: {
        translation: {
          description: {
            part1: 'Hariri <1>src/App.js</1> na uhifadhi ili upakie tena.',
            part2: 'Jifunze React',
          },
          counter: 'Lugha ilibadilishwa mara moja tu',
          counter_plural: 'Lugha imebadilika tayari mara {{count}}',
          footer: {
            date: 'Leo ni {{date, DATE_HUGE}}'
          }
        },
      },
    },
  });

export default i18n;
