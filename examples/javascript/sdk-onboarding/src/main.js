import { defineCustomElements } from '@facephi/sdk-web-wc/loader';
import './scripts/sdk-provider.js';

defineCustomElements(window);

const copyrightYearElement = document.getElementById('copyright-year');
if (copyrightYearElement) {
	copyrightYearElement.textContent = new Date().getFullYear().toString();
}
