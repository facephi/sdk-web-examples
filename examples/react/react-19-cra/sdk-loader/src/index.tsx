import { createRoot } from 'react-dom/client';
import App from './App';

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

// StrictMode enabled causes some calls to be made twice
createRoot(document.getElementById('app')!).render(<App />);
