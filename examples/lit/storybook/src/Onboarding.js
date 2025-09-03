import { LitElement, html } from 'lit';

export class Onboarding extends LitElement {

  createRenderRoot() {
    return this;
  }

  constructor() {
    super();
    this.title = 'Onboarding';
  }

  render() {
    return html`
      <div class="onboarding-container">
        <div class="onboarding-header">
          <h1 class="onboarding-title">${this.title}</h1>
        </div>
        
        <sdk-wrapper></sdk-wrapper>
      </div>
    `;
  }
}