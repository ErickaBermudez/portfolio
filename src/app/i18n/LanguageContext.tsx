"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, Language, Translations } from "./translations";

const LANG_STORAGE_KEY = "ericka-lang";

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(LANG_STORAGE_KEY);
      if (saved === "en" || saved === "es") setLangState(saved);
    } catch {
      // localStorage may be unavailable (private browsing, etc.) — language just won't persist.
    }
  }, []);

  const setLang = (next: Language) => {
    setLangState(next);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, next);
    } catch {
      // localStorage may be unavailable (private browsing, etc.) — language just won't persist.
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
