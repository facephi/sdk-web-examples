import { Component, CUSTOM_ELEMENTS_SCHEMA, Inject, PLATFORM_ID } from '@angular/core';
import { ErrorData } from '@facephi/sdk-web-wc';
import { Logger, LoggerType } from '../../utils/Logger';
import { RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
	selector: 'provider-component',
	standalone: true,
	imports: [CommonModule, RouterOutlet],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	templateUrl: './provider.component.html',
	styleUrl: './provider.component.css',
})
export class ProviderComponent {
	constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
	isBrowser = false;
	provider: any = undefined;

	async ngOnInit() {
		if (isPlatformBrowser(this.platformId)) {
			// Import enums or constants in Frontend
			const sdkPackage = await import('@facephi/sdk-web-wc');
			// Provider data
			this.provider = {
				apiKey: import.meta.env.NG_APP_API_KEY, // Required license
				steps: 'START,SELPHID_WIDGET,SELPHI_WIDGET,FINISH', //Order in platform
				type: sdkPackage.TypeFamily.onboarding, // onboarding or authentication
				customerId: 'facephi-sdk-angular19-example', //Unique user id
				language: sdkPackage.Language.es, // Main language in sdk and widgets
			};
			this.isBrowser = true;
		}
	}


	// Provider Events
	onEmitData(event: CustomEvent<{ operationId: string; sessionId: string; extraData: string }>) {
		const result = event.detail;
		Logger.printLog(LoggerType.SDK_PROVIDER, 'onEmitData', result);
	}

	onEmitError(event: CustomEvent<ErrorData>) {
		const result = event.detail;
		Logger.printLog(LoggerType.SDK_PROVIDER, 'onEmitError', result);
	}
}
