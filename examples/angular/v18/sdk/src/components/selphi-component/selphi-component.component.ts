import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import type {
	ExceptionCapturedEvent,
	ExtractionFinishEvent,
	ExtractionTimeoutEvent,
} from '@facephi/sdk-web-wc';

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
		initialTip: true,
		disableExit: false,
		stabilizationStage: false,
	};

	// Selphi Events
	onExtractionFinish(event: CustomEvent<ExtractionFinishEvent>) {
		console.log('%c%s', 'color: cyan;', '[SELPHI] extractionFinish:', event.detail.detail);
		// Redirect to SelphID
		this.router.navigate(['../selphid'], { relativeTo: this.currentRoute });
	}

	onExtractionTimeout(event: CustomEvent<ExtractionTimeoutEvent>) {
		console.log('%c%s', 'color: cyan;', '[SELPHI] extractionTimeout:', event.detail.detail);
	}

	onExceptionCaptured(event: CustomEvent<ExceptionCapturedEvent>) {
		console.log('%c%s', 'color: cyan;', '[SELPHI] exceptionCaptured:', event.detail.detail);
	}
}
