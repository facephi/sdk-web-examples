/**
 * Facephi SDK Provider Configuration Example
 *
 * WARNING:
 * This is an example of the implementation of the Web SDK Library and the generateBrowserCache functions.
 * All the properties, events and methods used in this examples are implemented as orientation to a better performance in coding.
 *
 * Please, consider to check the documentation before editing the code.
 *
 * We recommend to remove all the console logs and use actual code.
 *
 */
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Language, TypeFamily, generateSelphiBrowserCache, generateSelphIDBrowserCache, ErrorData } from '@facephi/sdk-web-wc';
import { Logger, LoggerType } from '../utils/Logger';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css']
})
export class AppComponent {
	// Demo config
	constructor(private router: Router) {}
	isEnabled = false;
	apiKey = import.meta.env.NG_APP_API_KEY;
	
	// Provider data
	provider = {
		apiKey: this.apiKey, // Required license
		steps: 'START,SELPHID_WIDGET,SELPHI_WIDGET,FINISH', //Order in platform
		type: TypeFamily.onboarding, // onboarding or authentication
		customerId: 'facephi-sdk-browser-cache-angular19-example', //Unique user id
		language: Language.es, // Main language in sdk and widgets
	};

	//#region Demo functions
	startOnboarding() {
		this.isEnabled = true;
		this.router.navigate(['/selphid']);
	}

	stopOnboarding() {
		window.location.replace('/');
	}

	generateSelphIDCache() {
		// Download SelphID resources in browser cache
		generateSelphIDBrowserCache(this.apiKey).then(() =>
			Logger.printLog(LoggerType.SDK_PROVIDER, "[Demo] Downloading SelphID resources in browser cache", '')
		);
	}

	generateSelphiCache() {
		// Download Selphi resources in browser cache
		generateSelphiBrowserCache(this.apiKey).then(() =>
			Logger.printLog(LoggerType.SDK_PROVIDER, "[Demo] Downloading Selphi resources in browser cache", '')
		);
	}
	//#endregion

	//#region Provider Events
	onEmitData(event: CustomEvent<{ operationId: string; sessionId: string; extraData: string }>) {
		const result = event.detail;
		Logger.printLog(LoggerType.SDK_PROVIDER, 'onEmitData', result);
	}

	onEmitError(event: CustomEvent<ErrorData>) {
		const result = event.detail;
		Logger.printLog(LoggerType.SDK_PROVIDER, 'onEmitError', result);
	}
	//#endregion
}
