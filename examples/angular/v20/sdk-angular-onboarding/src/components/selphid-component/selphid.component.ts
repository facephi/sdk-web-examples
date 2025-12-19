import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Logger, LoggerType } from '../../utils/Logger';
import { SelphidWidgetLoadedEvent, SelphidExtractionFinishEvent, SelphidExtractionTimeoutEvent, SelphidExceptionCapturedEvent, SelphidErrorTimeoutEvent, SelphidTimeoutButtonClickEvent, SelphidUserCancelEvent, SelphidTrackStatusEvent } from '@facephi/sdk-web-wc';
import { FacephiSelphidWidget } from '@facephi/sdk-web-angular';

@Component({
	selector: 'selphid-component',
	standalone: true,
	imports: [FacephiSelphidWidget],
	schemas: [],
	templateUrl: './selphid.component.html',
	styleUrl: './selphid.component.css',
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
		const result = event.detail;
		Logger.printLog(LoggerType.SELPHID, 'widgetLoaded', result);
	}

	handleExtractionFinish(event: CustomEvent) {
		const result = event.detail;

		Logger.printLog(LoggerType.SELPHID, 'extractionFinish', result);
		// Redirect to Selphi
		this.router.navigate(['../selphi'], { relativeTo: this.currentRoute });
	}

	handleExtractionTimeout(event: CustomEvent) {
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
