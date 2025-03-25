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
import { Component, CUSTOM_ELEMENTS_SCHEMA, type ElementRef, inject, ViewChild } from '@angular/core';
import { Language, TypeFamily } from '@facephi/sdk-web-wc';
import { Logger, LoggerType } from '../utils/Logger';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	templateUrl: './app.component.html',
})
export class AppComponent {
	operationId = '';

	@ViewChild('videoProvider') videoProvider!: ElementRef;

	// Router to redirect to SelphID when the video provider is loaded
	router = inject(Router);
	currentRoute = inject(ActivatedRoute);

	// Variable to show the button to get the recorded video when the process is completed
	isFinished = false;
	videoUrl = '';

	// Provider data
	provider = {
		apiKey: import.meta.env.NG_APP_API_KEY, // Required license
		steps: 'START,SELPHID_WIDGET,SELPHI_WIDGET,FINISH', //Order in platform
		type: TypeFamily.onboarding, // onboarding or authentication
		customerId: 'facephi-video-provider-sdk-angular19-example', //Unique user id
		language: Language.es, // Main language in sdk and widgets
	};

	// Provider Events
	onEmitData(event: CustomEvent<{ operationId: string; sessionId: string; extraData: string }>) {
		const result = event.detail;
		Logger.printLog(LoggerType.SDK_PROVIDER, 'onEmitData', result);

		this.operationId = result.operationId;
	}

	onEmitError(event: CustomEvent<{ statusCode: number; message: string }>) {
		const result = event.detail;
		Logger.printLog(LoggerType.SDK_PROVIDER, 'onEmitError', result);
	}

	// Facephi Video Provider Events
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	onChangeChannel(event: CustomEvent<any>) {
		const result = event.detail;
		Logger.printLog(LoggerType.VIDEO_PROVIDER, 'onChangeChannel', result);
	}

	onChangeLoading(event: CustomEvent<boolean>) {
		const result = event.detail;
		Logger.printLog(LoggerType.VIDEO_PROVIDER, 'onChangeLoading', result);
		// Check if the video provider has finished loading
		if (!result) {
			this.router.navigate(['/selphid'], { relativeTo: this.currentRoute });
		}
	}

	async onActivate() {
		// When the process has finished, the video provider must be stopped
		if (this.router.url === '/finish') {
			await this.videoProvider.nativeElement.stopVideo();

			this.isFinished = true;
		}
	}
}
