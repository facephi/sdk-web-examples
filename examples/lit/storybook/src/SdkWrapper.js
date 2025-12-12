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
import { LitElement, html, css } from 'lit';
import { Logger, LoggerType } from './utils/Logger.js';

export class SdkWrapper extends LitElement {
	static properties = {
		widget: { type: String },
		licenseKey: { type: String },
	};

	static styles = css`
    .sdk-section {
      height: 100vh;
    }
  `;

	constructor() {
		super();
		this.widget = 'loading';
		this.licenseKey = 'YOUR_LICENSE_KEY';
		this.showLog = false;
		this.language = 'es';
		this.previewCapture = true;
		this.captureTimeout = 10;
		this.captureRetries = 3;
		this.stabilizationStage = true;
		this.interactible = false;
		this.timeout = 30000;
	}

	// Renders the content in the main DOM instead of using shadow DOM.
	createRenderRoot() {
		return this;
	}

	firstUpdated() {
		this.setupSDKProvider();
	}

	setupSDKProvider() {
		customElements.whenDefined('facephi-sdk-provider').then(() => {
			const sdkProvider = this.querySelector('facephi-sdk-provider');
			if (sdkProvider) {
				sdkProvider.addEventListener('emitData', this.handleEmitData.bind(this));
				sdkProvider.addEventListener('emitError', this.handleEmitError.bind(this));
			}
		});
	}

	handleEmitData(event) {
		const result = event.detail;
		Logger.printLog(LoggerType.SDK_PROVIDER, 'onEmitData', result);
	}

	handleEmitError(event) {
		const result = event.detail;
		Logger.printLog(LoggerType.SDK_PROVIDER, 'onEmitError', result);
	}

	handleSelphidEvents(e) {
		const type = e.type;
		const result = e.detail?.detail;
		Logger.printLog(LoggerType.SELPHID, type, result);
		if (type === 'extractionFinish') {
			this.widget = 'selphi';
		}
	}

	handleSelphiEvents(e) {
		const type = e.type;
		const result = e.detail?.detail;
		Logger.printLog(LoggerType.SELPHI, type, result);
		if (type === 'extractionFinish') {
			this.widget = 'finish';
			this.stopVideoProvider();
		}
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
            customer-id="facephi-sdk-lit-nomar"
            language="${this.language}"
          >
            <facephi-video-provider
              @changeChannel=${this.handleChangeChannel}
              @changeLoading=${this.handleChangeLoading}
            >
              ${
								this.widget === 'selphid'
									? html`
                <facephi-selphid-widget
                  country="${this.country}"
                  preview-capture="${this.previewCapture}"
                  capture-timeout="${this.captureTimeout}"
                  capture-retries="${this.captureRetries}"
                  show-log="${this.showLog}"
                  @moduleLoaded=${this.handleSelphidEvents}
                  @extractionFinish=${this.handleSelphidEvents}
                  @extractionTimeout=${this.handleSelphidEvents}
                  @exceptionCaptured=${this.handleSelphidEvents}
                  @timeoutErrorButtonClick=${this.handleSelphidEvents}
                  @errorTimeout=${this.handleSelphidEvents}
                  @trackStatus=${this.handleSelphidEvents}
                  @userCancel=${this.handleSelphidEvents}
                ></facephi-selphid-widget>
              `
									: ''
							}

              ${
								this.widget === 'selphi'
									? html`
                <facephi-selphi-widget
                  stabilization-stage="${this.stabilizationStage}"
                  interactible="${this.interactible}"
                  preview-capture="${this.previewCapture}"
                  timeout="${this.timeout}"
                  show-log="${this.showLog}"
                  @moduleLoaded=${this.handleSelphiEvents}
                  @extractionFinish=${this.handleSelphiEvents}
                  @extractionTimeout=${this.handleSelphiEvents}
                  @exceptionCaptured=${this.handleSelphiEvents}
                  @timeoutErrorButtonClick=${this.handleSelphiEvents}
                  @errorTimeout=${this.handleSelphiEvents}
                  @userCancel=${this.handleSelphiEvents}
                  @trackStatus=${this.handleSelphiEvents}
                  @stabilizing=${this.handleSelphiEvents}
                ></facephi-selphi-widget>
              `
									: ''
							}

              ${
								this.widget === 'finish'
									? html`
                <div class="onboarding-finished">ONBOARDING FINISHED</div>
              `
									: ''
							}
            </facephi-video-provider>
          </facephi-sdk-provider>
        </section>
      </main>
    `;
	}
}
