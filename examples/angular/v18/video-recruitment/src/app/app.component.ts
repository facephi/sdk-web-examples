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
import { environment } from '../environments/environment';

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
		apiKey: environment.apiKey, // Required license
		customerId: 'facephi-sdk-angular-video-recruitment-example', // Unique user id
		language: Language.es, // Main language in sdk and widgets
	};

	// Variable to check if the provider has been loaded
	providerIsLoaded = false;

	// Provider Events
	onEmitData(event: CustomEvent<{ operationId: string; sessionId: string; extraData: string }>) {
		const result = event.detail;
		console.log(
			'%c%s',
			'color: lime;',
			`[PROVIDER] emitData: operationId(${result.operationId}), sessionId(${result.sessionId}), extraData(${result.extraData})`,
		);
	}

	onEmitError(event: CustomEvent<{ statusCode: number; message: string }>) {
		const result = event.detail;
		console.log(
			'%c%s',
			'color: lime;',
			`'[PROVIDER] EmitError: statusCode(${result.statusCode}), message(${result.message}) ',`,
		);
	}

	// Angular lifecycle methods
	ngOnInit() {
		console.info('[DEMO] SDK WC Configuration:', this.provider);
	}

	ngAfterViewInit() {
		// Wait until provider is set to load the video recruitment component
		if (this.sdkProvider) {
			this.providerIsLoaded = true;
		}
	}
}
