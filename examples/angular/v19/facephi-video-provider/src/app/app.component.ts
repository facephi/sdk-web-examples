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
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, NgIf],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	templateUrl: './app.component.html',
})
export class AppComponent {
	operationId = '';

	@ViewChild('videoProvider') videoProvider!: ElementRef;

	// Router to redirect to Selphi when the video provider is loaded
	router = inject(Router);
	currentRoute = inject(ActivatedRoute);

	// Variable to show the button to get the recorded video when the process is completed
	isFinished = false;
	videoUrl = '';

	// Provider data
	provider = {
		apiKey: import.meta.env.NG_APP_API_KEY, // Required license
		steps: 'START,SELPHI_WIDGET,SELPHID_WIDGET,FINISH', //Order in platform
		type: TypeFamily.onboarding, // onboarding or authentication
		customerId: 'facephi-video-provider-sdk-angular19-example', //Unique user id
		language: Language.es, // Main language in sdk and widgets
	};

	// Provider Events
	onEmitData(event: CustomEvent<{ operationId: string; sessionId: string; extraData: string }>) {
		const result = event.detail;
		console.log(
			'%c%s%s\n%s\n%s\n%s',
			'color: #00FF00;',
			'[PROVIDER] onEmitData:',
			'',
			`operationId: ${result.operationId}`,
			`sessionId: ${result.sessionId}`,
			`extraData: ${result.extraData}`,
		);

		this.operationId = result.operationId;
	}

	onEmitError(event: CustomEvent<{ statusCode: number; message: string }>) {
		const result = event.detail;
		console.log(
			'%c%s%s\n%s',
			'color: #00FF00;',
			'[PROVIDER] onEmitError:',
			'',
			`statusCode: ${result.statusCode}`,
			`message: ${result.message}`,
		);
	}

	// Facephi Video Provider Events
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	onChangeChannel(event: CustomEvent<any>) {
		const result = event.detail;
		console.log('%c%s', 'color: #735DA5;', '[VIDEO PROVIDER] onChangeChannel:', result);
	}

	onChangeLoading(event: CustomEvent<boolean>) {
		const result = event.detail;
		console.log('%c%s', 'color: #735DA5;', '[VIDEO PROVIDER] onChangeLoading:', result);
		// Check if the video provider has finished loading
		if (!result) {
			this.router.navigate(['/selphi'], { relativeTo: this.currentRoute });
		}
	}

	async onActivate() {
		// When the process has finished, the video provider must be stopped
		if (this.router.url === '/finish') {
			await this.videoProvider.nativeElement.stopVideo();

			this.isFinished = true;
		}
	}

	/**
	 * This function gets the recorded video when the video provider has stopped.
	 * Remember to add the video recording URL and the video recording API key to the enviroment.ts file for the fetch to work.
	 */
	fetchVideo() {
		if (import.meta.env.NG_APP_VIDEO_RECORDING_API_KEY && import.meta.env.NG_APP_VIDEO_RECORDING_URL) {
			const url = `${import.meta.env.NG_APP_VIDEO_RECORDING_URL}${this.operationId}`;

			fetch(url, {
				headers: {
					'x-api-key': import.meta.env.NG_APP_VIDEO_RECORDING_API_KEY,
				},
			})
				.then((response) => response.text())
				.then((data) => {
					console.log(data); // the recorded video URL will be a string
					this.videoUrl = data.split(',')[0].trim().replace('(', '');
				});
		} else {
			console.error('[DEMO] Video Recording credentials not provided');
		}
	}
}
