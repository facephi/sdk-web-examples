import { LitElement, html, css } from 'lit';
import { Logger, LoggerType } from '../utils/Logger.js';

export class SelphiComponent extends LitElement {
  static properties = {
    stabilizationStage: { type: Boolean },
    language: { type: String },
    interactible: { type: Boolean },
    previewCapture: { type: Boolean },
    timeout: { type: Number },
    showLog: { type: Boolean }
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
    
    facephi-selphi-widget {
      width: 100%;
      height: 100%;
    }
  `;

  constructor() {
    super();
    this.stabilizationStage = true;
    this.language = 'ES';
    this.interactible = true;
    this.previewCapture = true;
    this.timeout = 30000;
    this.showLog = false;
  }

  // Selphi Events
  handleModuleLoaded(event) {
    const result = event.detail.detail;
    Logger.printLog(LoggerType.SELPHI, 'widgetLoaded', result);
  }

  handleExtractionFinish(event) {
    const result = event.detail.detail;
    Logger.printLog(LoggerType.SELPHI, 'extractionFinish', result);

    // Dispatch custom event to communicate with parent component
    // This is necessary because this component is encapsulated in Shadow DOM
    // and needs to tell the parent (AppRoot) to navigate to the next step (Finish)
    this.dispatchEvent(new CustomEvent('selphiComplete', {
      detail: result,
      bubbles: true,
      composed: true
    }));
  }

  handleExtractionTimeout(event) {
    const result = event.detail.detail;
    Logger.printLog(LoggerType.SELPHI, 'extractionTimeout', result);
  }

  handleExceptionCaptured(event) {
    const result = event.detail.detail;
    Logger.printLog(LoggerType.SELPHI, 'exceptionCaptured', result);
  }

  handleErrorTimeout(event) {
    const result = event.detail.detail;
    Logger.printLog(LoggerType.SELPHI, 'errorTimeout', result);
  }

  handleTimeoutErrorButtonClick(event) {
    const result = event.detail.detail;
    Logger.printLog(LoggerType.SELPHI, 'timeoutErrorButtonClick', result);
  }

  handleUserCancel(event) {
    const result = event.detail.detail;
    Logger.printLog(LoggerType.SELPHI, 'userCancel', result);
  }

  handleTrackStatus(event) {
    const result = event.detail.detail;
    Logger.printLog(LoggerType.SELPHI, 'trackStatus', result);
  }

  handleStabilizing(event) {
    const result = event.detail.detail;
    Logger.printLog(LoggerType.SELPHI, 'stabilizing', result);
  }

  render() {
    return html`
      <facephi-selphi-widget
        stabilizationStage="${this.stabilizationStage}"
        language="${this.language}"
        interactible="${this.interactible}"
        previewCapture="${this.previewCapture}"
        timeout="${this.timeout}"
        showLog="${this.showLog}"
        @moduleLoaded=${this.handleModuleLoaded}
        @extractionFinish=${this.handleExtractionFinish}
        @extractionTimeout=${this.handleExtractionTimeout}
        @exceptionCaptured=${this.handleExceptionCaptured}
        @timeoutErrorButtonClick=${this.handleTimeoutErrorButtonClick}
        @errorTimeout=${this.handleErrorTimeout}
        @userCancel=${this.handleUserCancel}
        @trackStatus=${this.handleTrackStatus}
        @stabilizing=${this.handleStabilizing}
      ></facephi-selphi-widget>
    `;
  }
}

customElements.define('selphi-component', SelphiComponent);