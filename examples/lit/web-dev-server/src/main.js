import '@facephi/sdk-web-wc/bundle';
import { defineCustomElements } from '@facephi/sdk-web-wc/bundle';
import './lit-sdk-component.js';

defineCustomElements(window);

document.addEventListener('DOMContentLoaded', () => {
 const appElement = document.getElementById('app');
 if (appElement) {
   appElement.innerHTML = '<app-component></app-component>';
 } else {
   console.error('No element found with ID "app"');
 }
});

const copyrightYearElement = document.getElementById('copyright-year');
if (copyrightYearElement) {
 copyrightYearElement.insertAdjacentHTML('afterbegin', new Date().getFullYear());
}