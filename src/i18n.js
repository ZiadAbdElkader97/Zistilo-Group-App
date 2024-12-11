import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

// import { useTranslation } from "react-i18next";
// import Cookies from "js-cookie";
// import { useEffect } from "react";

// const { t } = useTranslation();
// const lng = cookies.get("i18next") || "en";

// useEffect(() => {
//   window.document.dir = i18n.dir();
// }, [lng]);

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "ar"],
    fallbackLng: "en",
    detection: {
      order: ["cookie", "localStorage", "htmlTag", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    react: { useSuspense: false },
  });

export default i18n;
