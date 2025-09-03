import { defineCustomElements } from '@facephi/sdk-web-wc/bundle/';

defineCustomElements(window);

const style = document.createElement('style');
style.textContent = `
  .sdk-section {
    height: 100vh;
  }
`;
document.head.appendChild(style);

