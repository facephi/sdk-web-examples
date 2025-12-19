import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Logger, LoggerType } from '../../utils/Logger';
import { FacephiSelphiWidget } from '@facephi/sdk-web-angular';
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
} from '@facephi/sdk-web-wc';

@Component({
	selector: 'selphi-component',
	standalone: true,
	imports: [FacephiSelphiWidget],
	schemas: [],
	templateUrl: './selphi.component.html',
	styleUrl: './selphi.component.css',
})
export class SelphiComponent {
	// Router to redirect to the finish component when finished
	router = inject(Router);
	currentRoute = inject(ActivatedRoute);

	// Selphi data
	selphi = {
		stabilization: true,
		interactible: true,
		previewImage: true,
		timeout: 30000,
		showLog: false,
	};

	// Selphi Events
	handleModuleLoaded(event: CustomEvent<SelphiWidgetLoadedEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'widgetLoaded', result);
	}

	handleExtractionFinish(event: CustomEvent<SelphiExtractionFinishEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'extractionFinish', result);
		// Redirect to the finish component
		this.router.navigate(['/finish']);
	}

	handleExtractionTimeout(event: CustomEvent<SelphiExtractionTimeoutEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'extractionTimeout', result);
	}

	handleExceptionCaptured(event: CustomEvent<SelphiExceptionCapturedEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'exceptionCaptured', result);
	}

	handleErrorTimeout(event: CustomEvent<SelphiErrorTimeoutEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'errorTimeout', result);
	}

	handleTimeoutErrorButtonClick(event: CustomEvent<SelphiTimeoutButtonClickEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'timeoutErrorButtonClick', result);
	}

	handleUserCancel(event: CustomEvent<SelphiUserCancelEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'userCancel', result);
	}

	handleTrackStatus(event: CustomEvent<SelphiTrackStatusEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'trackStatus', result);
	}

	handleStabilizing(event: CustomEvent<SelphiStabilizingEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'stabilizing', result);
	}
}
