import ReactDOM from 'react-dom/client';
import App from './App';
import { defineCustomElements } from '@facephi/sdk-web-wc/loader';

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(<App />);

defineCustomElements(window);
