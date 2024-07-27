import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Quasar, SessionStorage, Notify } from 'quasar';
import { VueQueryPlugin } from 'vue-query';

import App from './App.vue';
import router from './router';

import piniaPluginPersistedState from 'pinia-plugin-persistedstate';

// import icon libs
import '@quasar/extras/material-icons/material-icons.css';
// import quasar css
// import 'quasar/dist/quasar.css';
import 'quasar/src/css/index.sass';

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

const app = createApp(App);

app.config.errorHandler = (err: any) => {
  console.error(err);
};

app.use(pinia);
app.use(router);
app.use(Quasar, {
  plugins: { SessionStorage, Notify },
});
app.use(VueQueryPlugin);

app.mount('#app');
