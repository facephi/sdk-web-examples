import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Logger, LoggerType } from '../../utils/Logger';
import type {
	SelphiWidgetLoadedEvent,
	SelphiExtractionFinishEvent,
	SelphiExtractionTimeoutEvent,
	SelphiExceptionCapturedEvent,
	SelphiErrorTimeoutEvent,
	SelphiTimeoutButtonClickEvent,
	SelphiUserCancelEvent,
	SelphiStabilizingEvent,
	SelphiTrackStatusEvent,
	FacephiSelphiWidgetCustomEvent,
} from '@facephi/sdk-web-wc';

@Component({
	selector: 'app-selphi-component',
	standalone: true,
	imports: [],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	templateUrl: './selphi.component.html',
	styleUrls: ['./selphi.component.css'],
})
export class SelphiComponent {
	// Router to redirect to the finish component when finished
	router = inject(Router);
	currentRoute = inject(ActivatedRoute);

	// Selphi data
	selphi = {
		stabilizationStage: true,
		interactible: true,
		previewImage: true,
		timeout: 30000,
		showLog: false,
	};

	// Selphi Events
	handleModuleLoaded(event: FacephiSelphiWidgetCustomEvent<SelphiWidgetLoadedEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'widgetLoaded', result);
	}

	handleExtractionFinish(event: FacephiSelphiWidgetCustomEvent<SelphiExtractionFinishEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'extractionFinish', result);
		// Redirect to the finish component
		this.router.navigate(['/finish']);
	}

	handleExtractionTimeout(event: FacephiSelphiWidgetCustomEvent<SelphiExtractionTimeoutEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'extractionTimeout', result);
	}

	handleExceptionCaptured(event: FacephiSelphiWidgetCustomEvent<SelphiExceptionCapturedEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'exceptionCaptured', result);
	}

	handleErrorTimeout(event: FacephiSelphiWidgetCustomEvent<SelphiErrorTimeoutEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'errorTimeout', result);
	}

	handleTimeoutErrorButtonClick(event: FacephiSelphiWidgetCustomEvent<SelphiTimeoutButtonClickEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'timeoutErrorButtonClick', result);
	}

	handleUserCancel(event: FacephiSelphiWidgetCustomEvent<SelphiUserCancelEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'userCancel', result);
	}

	handleTrackStatus(event: FacephiSelphiWidgetCustomEvent<SelphiTrackStatusEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'trackStatus', result);
	}

	handleStabilizing(event: FacephiSelphiWidgetCustomEvent<SelphiStabilizingEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'stabilizing', result);
	}
}
