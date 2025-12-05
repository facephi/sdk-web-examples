import { SdkWrapper } from '../src/SdkWrapper.js';

export default {
  title: 'Components/SdkWrapper'
};

export const Default = () => {

  if (!customElements.get('sdk-wrapper')) {
    customElements.define('sdk-wrapper', SdkWrapper);
  }
  
  const element = document.createElement('sdk-wrapper');
  element.widget = 'loading';
  element.licenseKey = 'YOUR_LICENSE_KEY';
  
  return element;
};
