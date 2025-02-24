import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { defineCustomElements } from '@facephi/sdk-web-wc/loader';

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

defineCustomElements(window);