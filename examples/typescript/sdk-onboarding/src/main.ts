import { defineCustomElements } from '@facephi/sdk-web-wc/loader';
import './scripts/sdk-provider.ts';

defineCustomElements(window);

function setCopyrightYear(elementId = 'copyright-year') {
	try {
		const element = document.getElementById(elementId);
		if (!element) {
			throw new Error(`Element with id '${elementId}' not found`);
		}
		element.insertAdjacentHTML('afterbegin', new Date().getFullYear().toString());
	} catch (error) {
		console.error('Failed to set copyright year:', error);
	}
}

setCopyrightYear();
