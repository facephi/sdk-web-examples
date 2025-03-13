import { createApp } from 'vue';
import './assets/main.css';
import App from './App.vue';
import { defineCustomElements } from '@facephi/sdk-web-wc/loader';

createApp(App).mount('#app');

defineCustomElements(window);
