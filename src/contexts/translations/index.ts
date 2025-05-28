
import { Language, Translations } from '../types';
import { fr } from './fr';
import { en } from './en';
import { pt } from './pt';
import { es } from './es';
import { zh } from './zh';

export const translations: Record<Language, Translations> = {
  fr,
  en,
  pt,
  es,
  zh,
};
