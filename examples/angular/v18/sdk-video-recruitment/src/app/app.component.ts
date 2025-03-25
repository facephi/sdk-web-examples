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
import {
	type AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	CUSTOM_ELEMENTS_SCHEMA,
	type ElementRef,
	type OnInit,
	ViewChild,
} from '@angular/core';
import { Language } from '@facephi/sdk-web-wc';
import { VideoRecruitmentComponent } from '../components/video-recruitment/video-recruitment.component';
import { NgIf, NgFor } from '@angular/common';
import { Logger, LoggerType } from '../utils/Logger';
@Component({
	selector: 'app-root',
	standalone: true,
	imports: [VideoRecruitmentComponent, NgIf, NgFor],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	templateUrl: './app.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, AfterViewInit {
	@ViewChild('sdkProvider') sdkProvider!: ElementRef;

	// Provider data
	provider = {
		apiKey: import.meta.env.NG_APP_API_KEY, // Required license
		customerId: 'facephi-sdk-angular-video-recruitment-example', // Unique user id
		language: Language.es, // Main language in sdk and widgets
	};

	// Variable to check if the provider has been loaded
	providerIsLoaded = false;

	// Provider Events
	handleEmitData(event: CustomEvent<{ operationId: string; sessionId: string; extraData: string }>) {
		const result = event.detail;
		Logger.printLog(LoggerType.SDK_PROVIDER, 'onEmitData', result);
	}

	handleEmitError(event: CustomEvent<{ statusCode: number; message: string }>) {
		const result = event.detail;
		Logger.printLog(LoggerType.SDK_PROVIDER, 'onEmitError', result);
	}

	// Angular lifecycle methods
	ngOnInit() {}

	ngAfterViewInit() {
		// Wait until provider is set to load the video recruitment component
		if (this.sdkProvider) {
			this.providerIsLoaded = true;
		}
	}
}
