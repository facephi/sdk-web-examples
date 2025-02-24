import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { Language, TypeFamily } from '@facephi/sdk-web-wc';

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
		apiKey: environment.apiKey, // Required
		steps: 'START,SELPHI_WIDGET,SELPHID_WIDGET,FINISH',
		type: TypeFamily.onboarding, // Selphi and SelphID
		customerId: 'facephi-sdk-angular18-example',
		language: Language.es, // Main language, by default is Spanish
		disabled: true, // Disable tracking
	};

	// Provider Events
	onEmitError(event: CustomEvent<{ statusCode: number; message: string }>) {
		console.log('%c%s', 'color: lime;', '[PROVIDER] EmitError:', event.detail);
	}

	onEmitOperationId(event: CustomEvent<string>) {
		console.log('%c%s', 'color: lime;', '[PROVIDER] EmitOperationId:', event.detail);
	}

	onEmitSessionId(event: CustomEvent<string>) {
		console.log('%c%s', 'color: lime;', '[PROVIDER] EmitSessionId:', event.detail);
	}

	// Angular lifecycle methods
	ngOnInit() {
		console.info('[DEMO] SDK WC Configuration:', this.provider);
	}
}
