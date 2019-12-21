import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const options = {
        whitelist: ['en', 'ar'],
        lng: "ar",                              // language to use
        fallbackLng: 'en',
        interpolation: {escapeValue: false},  // React already does esc aping
};

i18next.use(Backend).use(LanguageDetector).use(initReactI18next).init(options).then();
