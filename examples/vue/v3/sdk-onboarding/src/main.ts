import { createApp } from 'vue';
import './assets/vue.css';
import App from './App.vue';
import { defineCustomElements } from '@facephi/sdk-web-wc/loader';

createApp(App).mount('#app');

defineCustomElements(window);
