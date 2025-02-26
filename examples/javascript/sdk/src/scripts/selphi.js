/**
 * Web Widget Selphi Demo Example Configuration
 *
/**
 * Facephi Selphi Widget Configuration Example
 *
 * WARNING:
 * This is an example of the implementation of the Web Widget.
 * All the properties, events and methods used in this examples are implemented as orientation to a better performance in coding.
 *
 * Please, consider to check the documentation before editing the code.
 *
 * We recommend to remove all the console logs and use actual code.
 *
 */
import { instanceSelphIDWidget } from './selphid';

const widgetContainer = document.getElementById('widgetContainer');

export function instanceSelphiWidget() {
	const widgetRef = document.createElement('facephi-selphi-widget');

	// Selphi config
	widgetRef.setAttribute('initial-tip', true);
	widgetRef.setAttribute('initial-tip-width', 350);
	widgetRef.setAttribute('initial-tip-height', 350);
	widgetRef.setAttribute('stabilization-stage', true);
	widgetRef.setAttribute('language', 'ES');
	widgetRef.setAttribute('interactible', true);
	widgetRef.setAttribute('preview-capture', true);
	widgetRef.setAttribute('timeout', 30000);
	widgetRef.setAttribute('show-log', false);

	// Widget event subscriptions
	widgetRef.addEventListener('extractionFinish', onExtractionFinish);
	widgetRef.addEventListener('extractionTimeout', onExtractionTimeout);
	widgetRef.addEventListener('exceptionCaptured', onExceptionCaptured);
	widgetRef.addEventListener('errorTimeout', onErrorTimeout);

	// Add widget in DOM
	widgetContainer.append(widgetRef);
}

// Widget event handlers
function onExtractionFinish(eventData) {
	const resultMessage = eventData.detail.detail?.extractionData?.bestImage?.data ? 'OK' : 'KO';
	console.log('%c%s', 'color: cyan;', `[SELPHI] extractionFinish: ${resultMessage}`);
	// Load the next widget
	widgetContainer.innerHTML = '';
	instanceSelphIDWidget();
}

function onExtractionTimeout(eventData) {
	const result = eventData.detail.detail;
	console.log('%c%s', 'color: cyan;', `[SELPHI] extractionTimeout: ${result}`);
}

function onExceptionCaptured(eventData) {
	const result = eventData.detail.detail;
	console.log('%c%s', 'color: cyan;', `[SELPHI] exceptionCaptured: ${result}`);
}

function onErrorTimeout(eventData) {
	const result = eventData.detail.detail;
	console.log('%c%s', 'color: cyan;', `[SELPHI] errorTimeout: ${result}`);
	widgetContainer.innerHTML =
		'Some error has occurred during the biometrical template extraction process.';
}
