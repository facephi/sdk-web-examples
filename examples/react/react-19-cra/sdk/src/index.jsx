import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import { defineCustomElements } from '@facephi/sdk-web-wc/loader';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);

defineCustomElements(window);
