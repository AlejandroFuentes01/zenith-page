import { atom } from 'nanostores';
import type { Language } from '../i18n/translations';

export const currentLanguage = atom<Language>('en');

export function setLanguage(lang: Language) {
  currentLanguage.set(lang);
  localStorage.setItem('preferred-language', lang);
}

// Initialize language from localStorage if available
if (typeof window !== 'undefined') {
  const savedLanguage = localStorage.getItem('preferred-language') as Language;
  if (savedLanguage) {
    currentLanguage.set(savedLanguage);
  }
}