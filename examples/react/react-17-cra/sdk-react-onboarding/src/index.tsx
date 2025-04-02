import ReactDOM from 'react-dom';
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

const rootElement = document.getElementById('app');

setCopyrightYear();

if (rootElement) {
	ReactDOM.render(<App />, rootElement);
} else {
	console.error('No element found with ID "root"');
}