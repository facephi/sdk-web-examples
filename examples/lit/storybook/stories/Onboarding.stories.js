import { Onboarding } from '../src/Onboarding.js';
import { SdkWrapper } from '../src/SdkWrapper.js';

export default {
  title: 'Components/Onboarding'
};

export const Default = () => {

  if (!customElements.get('onboarding-component')) {
    customElements.define('onboarding-component', Onboarding);
  }
  
  if (!customElements.get('sdk-wrapper')) {
    customElements.define('sdk-wrapper', SdkWrapper);
  }
  
  const container = document.createElement('div');
  
  container.innerHTML = '<onboarding-component></onboarding-component>';
  
  customElements.whenDefined('onboarding-component').then(() => {
    const onboardingComponent = container.querySelector('onboarding-component');
    if (onboardingComponent) {
      
      customElements.whenDefined('sdk-wrapper').then(() => {
        const sdkWrapper = onboardingComponent.querySelector('sdk-wrapper');
        if (sdkWrapper) {
          sdkWrapper.widget = 'selphid';
          sdkWrapper.licenseKey = 'PUT_YOUR_LICENSE_KEY_HERE';
        }
      });
    }
  });

  return container;
};
