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
		console.log('%c%s', 'color: #FF00FF;', '[SELPHID] extractionFinish:', result);
		// Redirect to the finish component
		this.router.navigate(['../finish'], { relativeTo: this.currentRoute });
	}

	handleExtractionTimeout(event: CustomEvent<ExtractionTimeoutEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #FF00FF;', '[SELPHID] extractionTimeout:', result);
	}

	handleExceptionCaptured(event: CustomEvent<ExceptionCapturedEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #FF00FF;', '[SELPHID] exceptionCaptured:', result);
	}

	handleErrorTimeout(event: CustomEvent<ErrorTimeoutEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #FF00FF;', '[SELPHID] errorTimeout:', result);
	}
}
