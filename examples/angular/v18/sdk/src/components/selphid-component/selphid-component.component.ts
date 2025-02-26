import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
	Language,
	type ExceptionCapturedEvent,
	type ExtractionFinishEvent,
	type ExtractionTimeoutEvent,
	type ErrorTimeoutEvent,
} from '@facephi/selphid-web-component';

@Component({
	selector: 'app-selphid-component',
	standalone: true,
	imports: [],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	templateUrl: './selphid-component.component.html',
	styleUrl: './selphid-component.component.css',
	encapsulation: ViewEncapsulation.ShadowDom,
})
export class SelphIDComponent {
	// Router to redirect to the finish component when finished
	router = inject(Router);
	currentRoute = inject(ActivatedRoute);

	// SelphID data
	selphid = {
		initialTip: true,
		initialTipHeight: 350,
		initialTipWidth: 350,
		country: 'ES',
		language: Language.ES,
		previewCapture: true,
		captureTimeout: 10,
		captureRetries: 3,
		showLog: false,
	};

	// SelphID Events
	handleExtractionFinish(event: CustomEvent<ExtractionFinishEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: fuchsia;', '[SELPHID] extractionFinish:', result);
		// Redirect to the finish component
		this.router.navigate(['../finish'], { relativeTo: this.currentRoute });
	}

	handleExtractionTimeout(event: CustomEvent<ExtractionTimeoutEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: fuchsia;', '[SELPHID] extractionTimeout:', result);
	}

	handleExceptionCaptured(event: CustomEvent<ExceptionCapturedEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: fuchsia;', '[SELPHID] exceptionCaptured:', result);
	}

	handleErrorTimeout(event: CustomEvent<ErrorTimeoutEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: fuchsia;', '[SELPHID] errorTimeout:', result);
	}
}
