import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          greetings: "Welcome to My Internationalization project",
        },
      },
      fr: {
        translation: {
          greetings: "Bienvenue dans mon projet d'internationalisation",
        },
      },
      hi: {
        translation: {
          greetings: "मेरे अंतर्राष्ट्रीयकरण परियोजना में आपका स्वागत है",
        },
      },
      ar: {
        translation: {
          greetings: "مرحبًا بك في مشروعي الدولي",
        },
      },
    },
  });
