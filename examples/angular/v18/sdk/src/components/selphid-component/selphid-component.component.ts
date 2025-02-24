import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import type { ExceptionCapturedEvent } from '@facephi/sdk-web-wc';
import type { ExtractionFinishEvent, ExtractionTimeoutEvent } from '@facephi/selphid-web-component';

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
		disableExit: false,
		country: 'ES',
	};

	// SelphID Events
	onExtractionFinish(event: CustomEvent<ExtractionFinishEvent>) {
		console.log('%c%s', 'color: fuchsia;', '[SELPHID] extractionFinish:', event.detail.detail);
		// Redirect to the finish component
		this.router.navigate(['../finish'], { relativeTo: this.currentRoute });
	}

	onExtractionTimeout(event: CustomEvent<ExtractionTimeoutEvent>) {
		console.log('%c%s', 'color: fuchsia;', '[SELPHID] extractionTimeout:', event.detail.detail);
	}

	onExceptionCaptured(event: CustomEvent<ExceptionCapturedEvent>) {
		console.log('%c%s', 'color: fuchsia;', '[SELPHID] exceptionCaptured:', event.detail.detail);
	}
}
