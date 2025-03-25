import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Logger, LoggerType } from '../../utils/Logger';
import {
	Language,
	type ExceptionCapturedEvent,
	type ExtractionFinishEvent,
	type ExtractionTimeoutEvent,
	type ErrorTimeoutEvent,
	type WidgetLoadedEvent,
	type TrackStatusEvent,
	type UserCancelEvent,
	type TimeoutButtonClickEvent,
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
	// Router to redirect to Selphi when finished
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
	handleModuleLoaded(event: CustomEvent<WidgetLoadedEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'widgetLoaded', result);
	}

	handleExtractionFinish(event: CustomEvent<ExtractionFinishEvent>) {
		const result = event.detail.detail;

		Logger.printLog(LoggerType.SELPHID, 'extractionFinish', result);
		// Redirect to Selphi
		this.router.navigate(['/selphi']);
	}

	handleExtractionTimeout(event: CustomEvent<ExtractionTimeoutEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'extractionTimeout', result);
	}

	handleExceptionCaptured(event: CustomEvent<ExceptionCapturedEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'exceptionCaptured', result);
	}

	handleErrorTimeout(event: CustomEvent<ErrorTimeoutEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'errorTimeout', result);
	}
	handleTimeoutErrorButtonClick(event: CustomEvent<TimeoutButtonClickEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'timeoutErrorButtonClick', result);
	}

	handleUserCancel(event: CustomEvent<UserCancelEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'userCancel', result);
	}

	hanldeTrackStatus(event: CustomEvent<TrackStatusEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'trackStatus', result);
	}
}
