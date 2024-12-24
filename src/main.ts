import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from 'vue-query';

import App from './App.vue';
import router from './router';
// import { QuillEditor } from '@vueup/vue-quill';
// import '@vueup/vue-quill/dist/vue-quill.snow.css';
import 'quill/dist/quill.snow.css';

import piniaPluginPersistedState from 'pinia-plugin-persistedstate';

import { createI18n } from 'vue-i18n';
import { datetimeFormats, numberFormats } from './i18n/i18nFormats';
import enUS from '@/i18n/en-US/en.json';
import koKR from '@/i18n/ko-KR/ko.json';

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

const i18n = createI18n({
  legacy: false,
  locale: 'ko-KR',
  globalInjection: true,
  fallbackLocale: 'ko-KR',
  messages: {
    'ko-KR': koKR,
    'en-US': enUS,
  },
  datetimeFormats: datetimeFormats,
  numberFormats: numberFormats,
});

const app = createApp(App);
app.config.errorHandler = (err: any) => {
  console.error(err);
};

app.use(pinia);
app.use(router);
app.use(i18n);
app.use(VueQueryPlugin);
// app.component('QuillEditor', QuillEditor);
app.mount('#app');
