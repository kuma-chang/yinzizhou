import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector) // Optional: Automatically detects user language
  .use(initReactI18next) // Initialize React bindings for i18next
  .init({
    fallbackLng: 'en', // Default language when the user's language is not available
    debug: false, // Enable for debugging, disable in production

    backend: {
      loadPath: '/locales/{{lng}}/translation.json'
    },

    interpolation: {
      escapeValue: false, // React already escapes values by default
    },
  });

export default i18n;
