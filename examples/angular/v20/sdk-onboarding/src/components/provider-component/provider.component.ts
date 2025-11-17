import { Component, CUSTOM_ELEMENTS_SCHEMA, } from '@angular/core';
import { ErrorData, Language, TypeFamily } from '@facephi/sdk-web-wc';
import { Logger, LoggerType } from '../../utils/Logger';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'provider-component',
	standalone: true,
	imports: [CommonModule, RouterOutlet],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	templateUrl: './provider.component.html',
	styleUrl: './provider.component.css',
})
export class ProviderComponent {
	// Provider data
	provider = {
		apiKey: import.meta.env.NG_APP_API_KEY, // Required license
		steps: 'START,SELPHID_WIDGET,SELPHI_WIDGET,FINISH', //Order in platform
		type: TypeFamily.onboarding, // onboarding or authentication
		customerId: 'facephi-sdk-angular19-example', //Unique user id
		language: Language.es, // Main language in sdk and widgets
	};

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
