import { Logger, LoggerType } from '../utils/Logger.js';
const SELPHI_CONFIG = `
    <facephi-selphi-widget 
        stabilization-stage="true" 
        language="ES" 
        interactible="true" 
        preview-capture="true" 
        timeout="30000" 
        show-log="false">
    </facephi-selphi-widget>
`;

export function initSelphiWidget(sdkProvider) {
	sdkProvider.innerHTML = SELPHI_CONFIG;
	const selphiWidget = document.querySelector('facephi-selphi-widget');

	//SELPHI EVENTS
	function handleExtractionFinish(event) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'extractionFinish', result);

		sdkProvider.innerHTML = '<div class="onboarding-finished">ONBOARDING FINISHED</div>';
	}

	function handleExtractionTimeout(event) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'extractionTimeout', result);
	}

	function handleExceptionCaptured(event) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'exceptionCaptured', result);
	}

	function handleErrorTimeout(event) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'errorTimeout', result);
	}

	if (selphiWidget) {
		selphiWidget.addEventListener('extractionFinish', handleExtractionFinish);
		selphiWidget.addEventListener('extractionTimeout', handleExtractionTimeout);
		selphiWidget.addEventListener('exceptionCaptured', handleExceptionCaptured);
		selphiWidget.addEventListener('errorTimeout', handleErrorTimeout);
	}
}
