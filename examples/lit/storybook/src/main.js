import { defineCustomElements } from '@facephi/sdk-web-wc/bundle/';
import { SdkWrapper } from './SdkWrapper.js';

async function initializeApp() {
  try {
   
    defineCustomElements(window);
    
    await customElements.whenDefined('facephi-sdk-provider');
    
    if (!customElements.get('sdk-wrapper')) {
      customElements.define('sdk-wrapper', SdkWrapper);
      
    }
    
    if (document.readyState === 'loading') {
      await new Promise(resolve => {
        document.addEventListener('DOMContentLoaded', resolve);
      });
    }
          
    const appElement = document.getElementById('app');
    
    if (appElement) {
      appElement.innerHTML = '<sdk-wrapper></sdk-wrapper>';

    } else {
      const newAppElement = document.createElement('div');
      newAppElement.id = 'app';
      document.body.appendChild(newAppElement);
      newAppElement.innerHTML = '<sdk-wrapper></sdk-wrapper>';
    }

    const copyrightYearElement = document.getElementById('copyright-year');
    if (copyrightYearElement) {
      copyrightYearElement.insertAdjacentHTML('afterbegin', new Date().getFullYear());
    }
    
  } catch (error) {
    console.error('ERROR:', error);
  }
}

initializeApp();

