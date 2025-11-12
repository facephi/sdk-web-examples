import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Logger, LoggerType } from '../../utils/Logger';
import { SelphidErrorTimeoutEvent, SelphidExceptionCapturedEvent, SelphidExtractionFinishEvent, SelphidExtractionTimeoutEvent, SelphidTimeoutButtonClickEvent, SelphidTrackStatusEvent, SelphidUserCancelEvent, SelphidWidgetLoadedEvent } from '@facephi/sdk-web-wc';

@Component({
	selector: 'selphid-component',
	standalone: true,
	imports: [],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	templateUrl: './selphid.component.html',
	styleUrl: './selphid.component.css',
	encapsulation: ViewEncapsulation.ShadowDom,
})
export class SelphIDComponent {
	// Router to redirect to Selphi when finished
	router = inject(Router);
	currentRoute = inject(ActivatedRoute);

	// SelphID data
	selphid = {
		country: 'ES',
		previewImage: true,
		captureTimeout: 10,
		captureRetries: 3,
		showLog: false,
	};

	// SelphID Events
	handleModuleLoaded(event: CustomEvent<SelphidWidgetLoadedEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'widgetLoaded', result);
	}

	handleExtractionFinish(event: CustomEvent<SelphidExtractionFinishEvent>) {
		const result = event.detail.detail;

		Logger.printLog(LoggerType.SELPHID, 'extractionFinish', result);
		// Redirect to Selphi
		this.router.navigate(['../selphi'], { relativeTo: this.currentRoute });
	}

	handleExtractionTimeout(event: CustomEvent<SelphidExtractionTimeoutEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'extractionTimeout', result);
	}

	handleExceptionCaptured(event: CustomEvent<SelphidExceptionCapturedEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'exceptionCaptured', result);
	}

	handleErrorTimeout(event: CustomEvent<SelphidErrorTimeoutEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'errorTimeout', result);
	}

	handleTimeoutErrorButtonClick(event: CustomEvent<SelphidTimeoutButtonClickEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'timeoutErrorButtonClick', result);
	}

	handleUserCancel(event: CustomEvent<SelphidUserCancelEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'userCancel', result);
	}

	handleTrackStatus(event: CustomEvent<SelphidTrackStatusEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'trackStatus', result);
	}
}
