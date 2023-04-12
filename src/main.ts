import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';

import translations from '../public/locales/translations';

import App from './App.vue';
import router from './router';

import './assets/main.css';

const i18n = createI18n({
  allowComposition: true,
  locale: 'en',
  messages: translations,
});

const app = createApp(App);

app.use(i18n);
app.use(createPinia());
app.use(router);

app.mount('#app');
