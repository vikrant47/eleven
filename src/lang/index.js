import Vue from 'vue';
import VueI18n from 'vue-i18n';
import elementEnLocale from 'element-ui/lib/locale/lang/en'; // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN';// element-ui lang
import cronEnLocale from 'vue-cron-generator/src/locale/en-US';
import cronZhLocale from 'vue-cron-generator/src/locale/zh-CN';

Vue.use(VueI18n);

const messages = {
  en: {
    ...elementEnLocale,
    ...cronEnLocale,
  },
  zh: {
    ...elementZhLocale,
    ...cronZhLocale
  }
};

const i18n = new VueI18n({
  // set locale
  // options: en | zh
  locale: 'en',
  // set locale messages
  messages
});

export default i18n;
