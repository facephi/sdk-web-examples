import { LitElement, html, css } from 'lit';

export class FinishComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
    
    .onboarding-finished {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      font-size: 18px;
      color: #4CAF50;
      font-weight: bold;
      text-align: center;
      padding: 20px;
    }
  `;

  render() {
    return html`
      <div class="onboarding-finished">
        ONBOARDING FINISHED. THE VIDEO PROVIDER HAS STOPPED RECORDING
      </div>
    `;
  }
}

customElements.define('finish-component', FinishComponent);