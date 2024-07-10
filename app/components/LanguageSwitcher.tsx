"use client";
import { setLanguageCookie } from "@/app/actions";
import { useEffect, useState } from "react";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLanguage(storedLanguage);
      setLanguageCookie(storedLanguage);
    }
  }, [language]);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    window.location.reload(); // Reload to apply the new language
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange("en")}>English</button>
      <button onClick={() => handleLanguageChange("fr")}>Français</button>
    </div>
  );
};

export default LanguageSwitcher;
