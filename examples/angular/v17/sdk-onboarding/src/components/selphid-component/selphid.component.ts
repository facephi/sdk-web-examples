import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Logger, LoggerType } from '../../utils/Logger';
import type {
	SelphidWidgetLoadedEvent,
	FacephiSelphidWidgetCustomEvent,
	SelphidExtractionFinishEvent,
	SelphidExtractionTimeoutEvent,
	SelphidExceptionCapturedEvent,
	SelphidErrorTimeoutEvent,
	SelphidTimeoutButtonClickEvent,
	SelphidUserCancelEvent,
	SelphidTrackStatusEvent,
} from '@facephi/sdk-web-wc';

@Component({
	selector: 'app-selphid-component',
	standalone: true,
	imports: [],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	templateUrl: './selphid.component.html',
	styleUrls: ['./selphid.component.css'],
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
	handleModuleLoaded(event: FacephiSelphidWidgetCustomEvent<SelphidWidgetLoadedEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'widgetLoaded', result);
	}

	handleExtractionFinish(event: FacephiSelphidWidgetCustomEvent<SelphidExtractionFinishEvent>) {
		const result = event.detail.detail;

		Logger.printLog(LoggerType.SELPHID, 'extractionFinish', result);
		// Redirect to Selphi
		this.router.navigate(['/selphi']);
	}

	handleExtractionTimeout(event: FacephiSelphidWidgetCustomEvent<SelphidExtractionTimeoutEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'extractionTimeout', result);
	}

	handleExceptionCaptured(event: FacephiSelphidWidgetCustomEvent<SelphidExceptionCapturedEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'exceptionCaptured', result);
	}

	handleErrorTimeout(event: FacephiSelphidWidgetCustomEvent<SelphidErrorTimeoutEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'errorTimeout', result);
	}

	handleTimeoutErrorButtonClick(event: FacephiSelphidWidgetCustomEvent<SelphidTimeoutButtonClickEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'timeoutErrorButtonClick', result);
	}

	handleUserCancel(event: FacephiSelphidWidgetCustomEvent<SelphidUserCancelEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'userCancel', result);
	}

	handleTrackStatus(event: FacephiSelphidWidgetCustomEvent<SelphidTrackStatusEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'trackStatus', result);
	}
}
