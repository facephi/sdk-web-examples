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
import { initSelphiWidget } from './selphi-widget';
import { Logger, LoggerType } from '../utils/Logger';

const SELPHID_CONFIG = `
    <facephi-selphid-widget 
        country="ES" 
        preview-image="true" 
        capture-timeout="10" 
        capture-retries="3" 
        show-log="false">
    </facephi-selphid-widget>
`;

export function initSelphidWidget(sdkProvider: { innerHTML: string }) {
	sdkProvider.innerHTML = SELPHID_CONFIG;
	const selphidWidget = document.querySelector('facephi-selphid-widget');

	// SELPHID EVENTS
	function handleExtractionFinish(event: FacephiSelphidWidgetCustomEvent<SelphidExtractionFinishEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'extractionFinish', result);

		// Initialize Selphi
		initSelphiWidget(sdkProvider);
	}

	function handleExtractionTimeout(event: FacephiSelphidWidgetCustomEvent<SelphidExtractionTimeoutEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'extractionTimeout', result);
		Logger.printLog(LoggerType.SELPHID, 'extractionFinish', result);
	}

	function handleExceptionCaptured(event: FacephiSelphidWidgetCustomEvent<SelphidExceptionCapturedEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'exceptionCaptured', result);
	}

	function handleErrorTimeout(event: FacephiSelphidWidgetCustomEvent<SelphidErrorTimeoutEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'errorTimeout', result);
	}

	function handleModuleLoaded(event: FacephiSelphidWidgetCustomEvent<SelphidWidgetLoadedEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'widgetLoaded', result);
	}

	function handleTimeoutErrorButtonClick(event: FacephiSelphidWidgetCustomEvent<SelphidTimeoutButtonClickEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'timeoutErrorButtonClick', result);
	}

	function handleUserCancel(event: FacephiSelphidWidgetCustomEvent<SelphidUserCancelEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'userCancel', result);
	}

	function handleTrackStatus(event: FacephiSelphidWidgetCustomEvent<SelphidTrackStatusEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'trackStatus', result);
	}

	if (selphidWidget) {
		selphidWidget.addEventListener('extractionFinish', handleExtractionFinish);
		selphidWidget.addEventListener('extractionTimeout', handleExtractionTimeout);
		selphidWidget.addEventListener('exceptionCaptured', handleExceptionCaptured);
		selphidWidget.addEventListener('errorTimeout', handleErrorTimeout);
		selphidWidget.addEventListener('moduleLoaded', handleModuleLoaded);
		selphidWidget.addEventListener('timeoutErrorButtonClick', handleTimeoutErrorButtonClick);
		selphidWidget.addEventListener('userCancel', handleUserCancel);
		selphidWidget.addEventListener('trackStatus', handleTrackStatus);
	}
}
