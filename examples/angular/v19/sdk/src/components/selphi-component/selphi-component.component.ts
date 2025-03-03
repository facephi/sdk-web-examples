import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
	Language,
	type ExceptionCapturedEvent,
	type ExtractionFinishEvent,
	type ExtractionTimeoutEvent,
	type ErrorTimeoutEvent,
} from '@facephi/selphi-web-component';

@Component({
	selector: 'app-selphi-component',
	standalone: true,
	imports: [],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	templateUrl: './selphi-component.component.html',
	styleUrl: './selphi-component.component.css',
	encapsulation: ViewEncapsulation.ShadowDom,
})
export class SelphiComponent {
	// Router to redirect to SelphID when finished
	router = inject(Router);
	currentRoute = inject(ActivatedRoute);

	// Selphi data
	selphi = {
		stabilizationStage: true,
		language: Language.ES,
		interactible: true,
		previewCapture: true,
		timeout: 30000,
		showLog: false,
	};

	// Selphi Events
	handleExtractionFinish(event: CustomEvent<ExtractionFinishEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #00FFFF;', '[SELPHI] extractionFinish:', result);
		// Redirect to SelphID
		this.router.navigate(['../selphid'], { relativeTo: this.currentRoute });
	}

	handleExtractionTimeout(event: CustomEvent<ExtractionTimeoutEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #00FFFF;', '[SELPHI] extractionTimeout:', result);
	}

	handleExceptionCaptured(event: CustomEvent<ExceptionCapturedEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #00FFFF;', '[SELPHI] exceptionCaptured:', result);
	}

	handleErrorTimeout(event: CustomEvent<ErrorTimeoutEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #00FFFF;', '[SELPHI] errorTimeout:', result);
	}
}
