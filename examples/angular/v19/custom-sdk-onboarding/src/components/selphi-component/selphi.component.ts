import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Logger, LoggerType } from '../../utils/Logger';
import type {
	ExceptionCapturedEvent,
	ExtractionFinishEvent,
	ExtractionTimeoutEvent,
	ErrorTimeoutEvent,
	UserCancelEvent,
	StabilizingEvent,
	TimeoutButtonClickEvent,
	TrackStatusEvent,
	WidgetLoadedEvent,
} from '@facephi/selphi-web-component';

@Component({
	selector: 'app-selphi-component',
	standalone: true,
	imports: [],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	templateUrl: './selphi.component.html',
	styleUrl: './selphi.component.css',
	encapsulation: ViewEncapsulation.ShadowDom,
})
export class SelphiComponent {
	// Router to redirect to the finish component when finished
	router = inject(Router);
	currentRoute = inject(ActivatedRoute);

	// Selphi data
	selphi = {
		stabilizationStage: true,
		language: '/i18n/selphi/custom-strings.json',
		interactible: true,
		previewCapture: true,
		timeout: 30000,
		showLog: false,

		/** Customisation */
		logo: '/favicon.ico',
		loadingAnimation: '/loadingAnimation.json',
	};

	// Selphi Events
	handleModuleLoaded(event: CustomEvent<WidgetLoadedEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'widgetLoaded', result);
	}

	handleExtractionFinish(event: CustomEvent<ExtractionFinishEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'extractionFinish', result);
		// Redirect to the finish component
		this.router.navigate(['/finish']);
	}

	handleExtractionTimeout(event: CustomEvent<ExtractionTimeoutEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'extractionTimeout', result);
	}

	handleExceptionCaptured(event: CustomEvent<ExceptionCapturedEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'exceptionCaptured', result);
	}

	handleErrorTimeout(event: CustomEvent<ErrorTimeoutEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'errorTimeout', result);
	}

	handleTimeoutErrorButtonClick(event: CustomEvent<TimeoutButtonClickEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'timeoutErrorButtonClick', result);
	}

	handleUserCancel(event: CustomEvent<UserCancelEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'userCancel', result);
	}

	handleTrackStatus(event: CustomEvent<TrackStatusEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'trackStatus', result);
	}

	handleStabilizing(event: CustomEvent<StabilizingEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'stabilizing', result);
	}
}
