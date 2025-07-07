/**
 * Facephi SDK Provider Configuration Example
 *
 * WARNING:
 * This is an example of the implementation of the Web SDK Library.
 * All the properties, events and methods used in this examples are implemented as orientation to a better performance in coding.
 *
 * Please, consider to check the documentation before editing the code.
 *
 * We recommend to remove all the console logs and use actual code.
 *
 */
import { LitElement, html } from 'lit';
import { Logger, LoggerType } from './utils/Logger.js';
import './components/SelphIDComponent.js';
import './components/SelphiComponent.js';
import './components/FinishComponent.js';

export class App extends LitElement {
  static properties = {
    widget: { type: String },
    licenseKey: { type: String },
    videoProviderLoaded: { type: Boolean }
  };

  constructor() {
    super();
    this.widget = 'loading';
    this.licenseKey = import.meta.env.VITE_LICENSE_KEY || '';
    this.videoProviderLoaded = false;
  }

  createRenderRoot() {
    return this;
  }

  // SDK Provider Events
  handleEmitData(event) {
    const result = event.detail;
    Logger.printLog(LoggerType.SDK_PROVIDER, 'onEmitData', result);
  }

  handleEmitError(event) {
    const result = event.detail;
    Logger.printLog(LoggerType.SDK_PROVIDER, 'onEmitError', result);
  }

  // Video Provider Events
  handleChangeChannel(event) {
    const result = event.detail;
    Logger.printLog(LoggerType.VIDEO_PROVIDER, 'onChangeChannel', result);
  }

  handleChangeLoading(event) {
    const result = event.detail;
    Logger.printLog(LoggerType.VIDEO_PROVIDER, 'onChangeLoading', result);
    
    if (!result) {
      this.videoProviderLoaded = true;
      this.widget = 'selphid';
    }
  }

  // Component Events
  handleSelphidComplete(event) {
    Logger.printLog(LoggerType.SELPHID, 'Component completed', event.detail);
    this.widget = 'selphi';
  }

  handleSelphiComplete(event) {
    Logger.printLog(LoggerType.SELPHI, 'Component completed', event.detail);
    this.widget = 'finish';
    this.stopVideoProvider();
  }

  async stopVideoProvider() {
    const videoProvider = this.querySelector('facephi-video-provider');
    if (videoProvider && videoProvider.stopVideo) {
      try {
        await videoProvider.stopVideo();
        Logger.printLog(LoggerType.VIDEO_PROVIDER, 'Video stopped successfully', null);
      } catch (error) {
        Logger.printLog(LoggerType.VIDEO_PROVIDER, 'Error stopping video', error);
      }
    }
  }

  render() {
    return html`
      <main class="main">
        <section class="sdk-section">
          <facephi-sdk-provider
            apikey="${this.licenseKey}"
            steps="START,SELPHID_WIDGET,SELPHI_WIDGET,FINISH"
            type="ONBOARDING"
            customer-id="facephi-video-provider-sdk-lit-example"
            language="es"
            @emitData=${this.handleEmitData}
            @emitError=${this.handleEmitError}
          >
            <facephi-video-provider
              @changeChannel=${this.handleChangeChannel}
              @changeLoading=${this.handleChangeLoading}
            >
              ${this.widget === 'loading' ? html`
                <div class="loading">Loading video provider...</div>
              ` : ''}

              ${this.widget === 'selphid' ? html`
                <selphid-component
                  @selphidComplete=${this.handleSelphidComplete}
                ></selphid-component>
              ` : ''}

              ${this.widget === 'selphi' ? html`
                <selphi-component
                  @selphiComplete=${this.handleSelphiComplete}
                ></selphi-component>
              ` : ''}

              ${this.widget === 'finish' ? html`
                <finish-component></finish-component>
              ` : ''}
            </facephi-video-provider>
          </facephi-sdk-provider>
        </section>
      </main>
    `;
  }
}

customElements.define('app-component', App);