import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { defineCustomElements } from '@facephi/sdk-web-wc/loader';

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

defineCustomElements(window);
