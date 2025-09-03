import { defineCustomElements } from '@facephi/sdk-web-wc/bundle/';
import { SdkWrapper } from './SdkWrapper.js';
import { Onboarding } from './Onboarding.js';

async function initializeApp() {
  try {
   
    defineCustomElements(window);
    
    await customElements.whenDefined('facephi-sdk-provider');
    
    if (!customElements.get('sdk-wrapper')) {
      customElements.define('sdk-wrapper', SdkWrapper);
      
    }
    
    if (!customElements.get('onboarding-component')) {
      customElements.define('onboarding-component', Onboarding);
      
    }
    
    if (document.readyState === 'loading') {
      await new Promise(resolve => {
        document.addEventListener('DOMContentLoaded', resolve);
      });
    }
          
    const appElement = document.getElementById('app');
    
    if (appElement) {
      appElement.innerHTML = '<onboarding-component></onboarding-component>';

    } else {
      const newAppElement = document.createElement('div');
      newAppElement.id = 'app';
      document.body.appendChild(newAppElement);
      newAppElement.innerHTML = '<onboarding-component></onboarding-component>';
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

