import ReactDOM from 'react-dom/client';
import App from './App';

import { defineCustomElements } from '@facephi/sdk-web-wc/loader';

const rootElement = document.getElementById('app');

if (rootElement) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(<App />);
} else {
	console.error('No element found with ID "root"');
}

defineCustomElements(window);
