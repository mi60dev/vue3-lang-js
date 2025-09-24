import Lang from 'lang.js';
import { ref } from 'vue';

const plugin = {
  install(Vue, options) {

    const localeRef = ref(options.locale || 'en');
    const fallbackLocale = options.fallback || 'en';
    const messages = options.messages || {};

    const lang = new Lang({
      messages: messages,
      locale: localeRef.value,
      fallback: fallbackLocale
    });

    const translate = function (key, options) {
      localeRef.value;
      return lang.trans(key, options);
    };

    lang._reactiveLocaleRef = localeRef;
    const originalSetLocale = lang.setLocale.bind(lang);
    lang.setLocale = function (newLocale) {
      originalSetLocale(newLocale);
      localeRef.value = newLocale;
    };

    Object.defineProperty(Vue.config.globalProperties, '$lang', { get: () => lang });
    Object.defineProperty(Vue.config.globalProperties, '$trans', { get: () => translate });
    Object.defineProperty(Vue.config.globalProperties, '$t', { get: () => translate });
  
    if(options.hasOwnProperty('alias')) {
        Object.defineProperty(Vue.config.globalProperties, options.alias, { get: () => translate})
    }
  }
};
export default plugin;