import ReactDOM from 'react-dom';
import App from './App';

const rootElement = document.getElementById('app');

if (rootElement) {
	ReactDOM.render(<App />, rootElement);
} else {
	console.error('No element found with ID "root"');
}
