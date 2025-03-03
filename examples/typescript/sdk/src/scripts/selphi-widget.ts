import {
	Language,
	type ErrorTimeoutEvent,
	type ExceptionCapturedEvent,
	type ExtractionFinishEvent,
	type ExtractionTimeoutEvent,
} from '@facephi/selphi-web-component';
import { initSelphidWidget } from './selphid-widget';

const SELPHI_CONFIG = `
    <facephi-selphi-widget 
        stabilization-stage="true" 
        language="${Language.ES}" 
        interactible="true" 
        preview-capture="true" 
        timeout="30000" 
        show-log="false">
    </facephi-selphi-widget>
`;

export function initSelphiWidget(sdkProvider: { innerHTML: string }) {
	sdkProvider.innerHTML = SELPHI_CONFIG;
	const selphiWidget = document.querySelector('facephi-selphi-widget');

	//SELPHI EVENTS
	function handleExtractionFinish(event: CustomEvent<ExtractionFinishEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #00FFFF;', '[SELPHI] extractionFinish:', result);
		// Initialize the SelphID
		initSelphidWidget(sdkProvider);
	}

	function handleExtractionTimeout(event: CustomEvent<ExtractionTimeoutEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #00FFFF;', '[SELPHI] extractionTimeout:', result);
	}

	function handleExceptionCaptured(event: CustomEvent<ExceptionCapturedEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #00FFFF;', '[SELPHI] exceptionCaptured:', result);
	}

	function handleErrorTimeout(event: CustomEvent<ErrorTimeoutEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #00FFFF;', '[SELPHI] errorTimeout:', result);
	}

	if (selphiWidget) {
		selphiWidget.addEventListener('extractionFinish', handleExtractionFinish);
		selphiWidget.addEventListener('extractionTimeout', handleExtractionTimeout);
		selphiWidget.addEventListener('exceptionCaptured', handleExceptionCaptured);
		selphiWidget.addEventListener('errorTimeout', handleErrorTimeout);
	}
}
