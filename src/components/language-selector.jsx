import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const languages = [
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
    { code: "hi", label: "हिन्दी" },
    { code: "ar", label: "العربية" },
  ];

  const changeLanguage = (code) => {
    // Function to change the language
    i18n.changeLanguage(code);
  };
  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div className="btn-container">
      {languages.map((lang) => (
        <button
          className={lang.code === i18n.language ? "selected" : ""}
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
