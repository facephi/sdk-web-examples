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
import { Logger, LoggerType } from '../utils/Logger';

const SELPHI_CONFIG = `
    <facephi-selphi-widget 
        stabilization-stage="true" 
        interactible="true" 
        preview-image="true" 
        timeout="30000" 
        show-log="false">
    </facephi-selphi-widget>
`;

export function initSelphiWidget(sdkProvider: { innerHTML: string }) {
	sdkProvider.innerHTML = SELPHI_CONFIG;
	const selphiWidget = document.querySelector('facephi-selphi-widget');

	//SELPHI EVENTS
	function handleExtractionFinish(event: FacephiSelphiWidgetCustomEvent<SelphiExtractionFinishEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'extractionFinish', result);

		sdkProvider.innerHTML = '<div class="onboarding-finished">ONBOARDING FINISHED</div>';
	}

	function handleExtractionTimeout(event: FacephiSelphiWidgetCustomEvent<SelphiExtractionTimeoutEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'extractionTimeout', result);
	}

	function handleExceptionCaptured(event: FacephiSelphiWidgetCustomEvent<SelphiExceptionCapturedEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'exceptionCaptured', result);
	}

	function handleErrorTimeout(event: FacephiSelphiWidgetCustomEvent<SelphiErrorTimeoutEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'errorTimeout', result);
	}

	function handleModuleLoaded(event: FacephiSelphiWidgetCustomEvent<SelphiWidgetLoadedEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'widgetLoaded', result);
	}

	function handleTimeoutErrorButtonClick(event: FacephiSelphiWidgetCustomEvent<SelphiTimeoutButtonClickEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'timeoutErrorButtonClick', result);
	}

	function handleUserCancel(event: FacephiSelphiWidgetCustomEvent<SelphiUserCancelEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'userCancel', result);
	}

	function handleTrackStatus(event: FacephiSelphiWidgetCustomEvent<SelphiTrackStatusEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'trackStatus', result);
	}

	function handleStabilizing(event: FacephiSelphiWidgetCustomEvent<SelphiStabilizingEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'stabilizing', result);
	}

	if (selphiWidget) {
		selphiWidget.addEventListener('extractionFinish', handleExtractionFinish);
		selphiWidget.addEventListener('extractionTimeout', handleExtractionTimeout);
		selphiWidget.addEventListener('exceptionCaptured', handleExceptionCaptured);
		selphiWidget.addEventListener('errorTimeout', handleErrorTimeout);
		selphiWidget.addEventListener('moduleLoaded', handleModuleLoaded);
		selphiWidget.addEventListener('timeoutErrorButtonClick', handleTimeoutErrorButtonClick);
		selphiWidget.addEventListener('userCancel', handleUserCancel);
		selphiWidget.addEventListener('trackStatus', handleTrackStatus);
		selphiWidget.addEventListener('stabilizing', handleStabilizing);
	}
}
