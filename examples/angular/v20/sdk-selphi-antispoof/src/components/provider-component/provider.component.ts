import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ErrorData, ExportData, Language, TypeFamily } from '@facephi/sdk-web-wc';
import { Logger, LoggerType } from '../../utils/Logger';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'provider-component',
	standalone: true,
	imports: [CommonModule, RouterOutlet],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	templateUrl: './provider.component.html',
})
export class ProviderComponent {
	// Provider data
	provider = {
		apiKey: import.meta.env.NG_APP_API_KEY || '', // Required license
		steps: 'START,SELPHI_WIDGET,FINISH',
		type: TypeFamily.onboarding, // onboarding or authentication
		customerId: 'facephi-sdk-selphi-antispoof-angular20-example', // Unique user id
		language: Language.es, // Main language in sdk and widgets
	};

	// Provider Events
	onEmitData(event: CustomEvent<ExportData>) {
		const result = event.detail;
		Logger.printLog(LoggerType.SDK_PROVIDER, 'onEmitData', result);
	}

	onEmitError(event: CustomEvent<ErrorData>) {
		const result = event.detail;
		Logger.printLog(LoggerType.SDK_PROVIDER, 'onEmitError', result);
	}
}
