import { SdkWrapper } from '../src/SdkWrapper.js';

export default {
  title: 'Components/SdkWrapper'
};

export const Default = () => {

  if (!customElements.get('sdk-wrapper')) {
    customElements.define('sdk-wrapper', SdkWrapper);
  }
  
  const element = document.createElement('sdk-wrapper');
  element.widget = 'selphid';
  element.licenseKey = 'PUT_YOUR_LICENSE_KEY_HERE';
  
  return element;
};
