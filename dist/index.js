import Lang from 'lang.js';

const plugin = {
  install(Vue, options) {
    // Default options
    
    const Locale = options.locale || 'en';
    const fallbackLocale = options.fallback || 'en';
    const messages = options.messages || {};

    const lang = new Lang({
      messages: messages,
      locale: Locale,
      fallback: fallbackLocale
    });

    var translate = function (key, options) {
      return lang.trans(key, options);
    };

    Object.defineProperty(Vue.config.globalProperties, '$lang', { get: () => lang})

    Object.defineProperty(Vue.config.globalProperties, '$trans', { get: () => translate})
    Object.defineProperty(Vue.config.globalProperties, '$t', { get: () => translate})
    
    if(options.hasOwnProperty('alias')) {
        Object.defineProperty(Vue.config.globalProperties, options.alias, { get: () => translate})
    }
  }
};

export default plugin;
