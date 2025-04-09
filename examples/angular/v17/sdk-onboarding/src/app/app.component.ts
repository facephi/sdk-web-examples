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
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Language, TypeFamily } from '@facephi/sdk-web-wc';
import { Logger, LoggerType } from '../utils/Logger';

declare const process: { env: { [key: string]: string } };

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	templateUrl: './app.component.html',
})
export class AppComponent {
	// Provider data
	provider = {
		// biome-ignore lint/complexity/useLiteralKeys: <explanation>
		apiKey: process.env['NG_APP_API_KEY'] || 'your_default_api_key_here', // Required license
		// apiKey: 'yuo3wRjIzFjIF7ary8SYdOvu19nzaijY8AgTwFBy',
		steps: 'START,SELPHID_WIDGET,SELPHI_WIDGET,FINISH', //Order in platform
		type: TypeFamily.onboarding, // onboarding or authentication
		customerId: 'facephi-sdk-angular17-example', // Unique user id
		language: Language.es, // Main language in sdk and widgets
	};

	// Provider Events
	onEmitData(event: CustomEvent<{ operationId: string; sessionId: string; extraData: string }>) {
		const result = event.detail;
		Logger.printLog(LoggerType.SDK_PROVIDER, 'onEmitData', result);
	}

	onEmitError(event: CustomEvent<{ statusCode: number; message: string }>) {
		const result = event.detail;
		Logger.printLog(LoggerType.SDK_PROVIDER, 'onEmitError', result);
		Logger.printLog(LoggerType.SDK_PROVIDER, 'onEmitError', result);
	}
}
