import { I18n } from './index';

export const LOAD_TRANSLATIONS = 'loadTranslation';
export const loadTranslations = translations => {
  I18n.forceComponentsUpdate();
  return {
    type: LOAD_TRANSLATIONS,
    translations,
  };
};

export const SET_LOCALE = 'setLocal';
export const setLocale = locale => {
  I18n.forceComponentsUpdate();
  return {
    type: SET_LOCALE,
    locale,
  };
};
