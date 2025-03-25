import { initSelphiWidget } from './selphi-widget.js';
import { Logger, LoggerType } from '../utils/Logger.js';

const SELPHID_CONFIG = `
    <facephi-selphid-widget 
        country="ES" 
        language="ES" 
        preview-capture="true" 
        capture-timeout="10" 
        capture-retries="3" 
        show-log="false">
    </facephi-selphid-widget>
`;

export function initSelphidWidget(sdkProvider) {
	sdkProvider.innerHTML = SELPHID_CONFIG;
	const selphidWidget = document.querySelector('facephi-selphid-widget');

	// SELPHID EVENTS
	function handleExtractionFinish(event) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'extractionFinish', result);
		// Initialize Selphi
		initSelphiWidget(sdkProvider);
	}

	function handleExtractionTimeout(event) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'extractionTimeout', result);
		Logger.printLog(LoggerType.SELPHID, 'extractionFinish', result);
	}

	function handleExceptionCaptured(event) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'exceptionCaptured', result);
	}

	function handleErrorTimeout(event) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'errorTimeout', result);
	}

	if (selphidWidget) {
		selphidWidget.addEventListener('extractionFinish', handleExtractionFinish);
		selphidWidget.addEventListener('extractionTimeout', handleExtractionTimeout);
		selphidWidget.addEventListener('exceptionCaptured', handleExceptionCaptured);
		selphidWidget.addEventListener('errorTimeout', handleErrorTimeout);
	}
}
