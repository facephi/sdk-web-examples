import { LitElement, html, css } from 'lit';
import { Logger, LoggerType } from '../utils/Logger.js';

export class SelphIDComponent extends LitElement {
  static properties = {
    country: { type: String },
    previewImage: { type: Boolean },
    captureTimeout: { type: Number },
    captureRetries: { type: Number },
    showLog: { type: Boolean }
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
    
    facephi-selphid-widget {
      width: 100%;
      height: 100%;
    }
  `;

  constructor() {
    super();
    this.country = 'ES';
    this.previewImage = true;
    this.captureTimeout = 10;
    this.captureRetries = 3;
    this.showLog = false;
  }

  // SelphID Events
  handleModuleLoaded(event) {
    const result = event.detail.detail;
    Logger.printLog(LoggerType.SELPHID, 'widgetLoaded', result);
  }

  handleExtractionFinish(event) {
    const result = event.detail.detail;
    Logger.printLog(LoggerType.SELPHID, 'extractionFinish', result);
    
    // Dispatch custom event to communicate with parent component
    // This is necessary because this component is encapsulated in Shadow DOM
    // and needs to tell the parent (AppRoot) to navigate to the next step (Selphi)
    this.dispatchEvent(new CustomEvent('selphidComplete', {
      detail: result,
      bubbles: true,
      composed: true
    }));
  }

  handleExtractionTimeout(event) {
    const result = event.detail.detail;
    Logger.printLog(LoggerType.SELPHID, 'extractionTimeout', result);
  }

  handleExceptionCaptured(event) {
    const result = event.detail.detail;
    Logger.printLog(LoggerType.SELPHID, 'exceptionCaptured', result);
  }

  handleErrorTimeout(event) {
    const result = event.detail.detail;
    Logger.printLog(LoggerType.SELPHID, 'errorTimeout', result);
  }

  handleTimeoutErrorButtonClick(event) {
    const result = event.detail.detail;
    Logger.printLog(LoggerType.SELPHID, 'timeoutErrorButtonClick', result);
  }

  handleUserCancel(event) {
    const result = event.detail.detail;
    Logger.printLog(LoggerType.SELPHID, 'userCancel', result);
  }

  handleTrackStatus(event) {
    const result = event.detail.detail;
    Logger.printLog(LoggerType.SELPHID, 'trackStatus', result);
  }

  render() {
    return html`
      <facephi-selphid-widget
        country="${this.country}"
        preview-image="${this.previewImage}"
        capture-timeout="${this.captureTimeout}"
        capture-retries="${this.captureRetries}"
        show-log="${this.showLog}"
        @moduleLoaded=${this.handleModuleLoaded}
        @extractionFinish=${this.handleExtractionFinish}
        @extractionTimeout=${this.handleExtractionTimeout}
        @exceptionCaptured=${this.handleExceptionCaptured}
        @timeoutErrorButtonClick=${this.handleTimeoutErrorButtonClick}
        @errorTimeout=${this.handleErrorTimeout}
        @trackStatus=${this.handleTrackStatus}
        @userCancel=${this.handleUserCancel}
      ></facephi-selphid-widget>
    `;
  }
}

customElements.define('selphid-component', SelphIDComponent);