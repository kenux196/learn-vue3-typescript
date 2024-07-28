import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Quasar, SessionStorage, Notify } from 'quasar';
import { VueQueryPlugin } from 'vue-query';

import App from './App.vue';
import router from './router';

import piniaPluginPersistedState from 'pinia-plugin-persistedstate';

import messages from '@/i18n';

// import icon libs
import '@quasar/extras/material-icons/material-icons.css';
// import quasar css
// import 'quasar/dist/quasar.css';
import 'quasar/src/css/index.sass';
import { createI18n } from 'vue-i18n';
import { datetimeFormats, numberFormats } from './i18n/i18nFormats';
import enUS from '@/i18n/en-US/en.json';
import koKR from '@/i18n/ko-KR/ko.json';

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

// const i18n = createI18n({
//   legacy: false,
//   locale: 'ko-KR',
//   globalInjection: true,
//   fallbackLocale: 'ko-KR',
//   messages: messages,
//   datetimeFormats: datetimeFormats,
//   numberFormats: numberFormats,
// });

type MessageSchema = typeof koKR;
type NumberSchema = {
  currency: {
    style: 'currency';
    currencyDisplay: 'symbole';
    currency: string;
  };
  decimal: {
    style: 'decimal';
    minimumFractionDigits: number;
    maximumFractionDigits: number;
  };
  percent: {
    style: 'percent';
    useGrouping: false;
  };
};
type DateTimeSchema = {
  short: {
    short: {
      year: 'numeric';
      month: 'short';
      day: 'numeric';
    };
    long: {
      year: 'numeric';
      month: 'short';
      day: 'numeric';
      weekday: 'short';
      hour: 'numeric';
      minute: 'numeric';
      timeZoneName: 'short';
      timezone: 'Asia/Tokyo';
    };
    long_h_12: {
      year: 'numeric';
      month: 'short';
      day: 'numeric';
      weekday: 'short';
      hour: 'numeric';
      minute: 'numeric';
      hour12: true;
      timeZoneName: 'short';
      timezone: 'Asia/Tokyo';
    };
    long_h_24: {
      year: 'numeric';
      month: 'short';
      day: 'numeric';
      weekday: 'short';
      hour: 'numeric';
      minute: 'numeric';
      hour12: false;
      timeZoneName: 'short';
      timezone: 'Asia/Tokyo';
    };
  };
};
const i18n = createI18n<
  [message: MessageSchema, number: NumberSchema, datatime: DateTimeSchema],
  'ko-KR' | 'en-US'
>({
  legacy: false,
  locale: 'ko-KR',
  globalInjection: true,
  fallbackLocale: 'ko-KR',
  messages: {
    'ko-KR': koKR,
    'en-US': enUS,
  },
  // datetimeFormats: datetimeFormats,
  numberFormats: numberFormats,
});

const app = createApp(App);
app.config.errorHandler = (err: any) => {
  console.error(err);
};

app.use(pinia);
app.use(router);
app.use(i18n);
app.use(Quasar, {
  plugins: { SessionStorage, Notify },
});
app.use(VueQueryPlugin);

app.mount('#app');
