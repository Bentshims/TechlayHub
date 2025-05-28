
export type Language = 'fr' | 'en' | 'pt' | 'es' | 'zh';

export interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export interface Translations {
  [key: string]: string;
}
