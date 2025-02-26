/**
 * Facephi Selphi Facephi Configuration Example
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
import { ErrorTimeoutEvent, ExceptionCapturedEvent, ExtractionFinishEvent, ExtractionTimeoutEvent, Language } from "@facephi/selphid-web-component";

const widgetContainer = document.getElementById("widgetContainer") as HTMLElement;

export function instanceSelphIDWidget() {
	const widgetRef = document.createElement("facephi-selphid-widget") as any;

	// Selphi config
	widgetRef.setAttribute("initial-tip", true);
	widgetRef.setAttribute("initial-tip-width", 350);
	widgetRef.setAttribute("initial-tip-height", 350);
	widgetRef.setAttribute("country", ["ES"]);
	widgetRef.setAttribute("language", Language.ES);
	widgetRef.setAttribute("preview-capture", true);
	widgetRef.setAttribute("capture-timeout", 10);
	widgetRef.setAttribute("capture-retries", 3);
	widgetRef.setAttribute("show-log", false);

	// Widget event subscriptions
	widgetRef.addEventListener("extractionFinish", onExtractionFinish);
	widgetRef.addEventListener("extractionTimeout", onExtractionTimeout);
	widgetRef.addEventListener("exceptionCaptured", onExceptionCaptured);
	widgetRef.addEventListener("errorTimeout", onErrorTimeout);

	// Add widget in DOM
	widgetContainer.append(widgetRef);
}

// Widget event handlers
function onExtractionFinish(eventData: CustomEvent<ExtractionFinishEvent>) {
	const resultMessage = eventData.detail.detail?.result?.images?.backDocument && eventData.detail.detail?.result?.images?.frontDocument ? 'OK' : 'KO';
	console.log('%c%s', 'color: fuchsia;', `[SELPHID] extractionFinish: ${resultMessage}`);
	// Remove the widget and continue process
	widgetContainer.innerHTML = "The onboarding process has been completed.";
}
function onExtractionTimeout(eventData: CustomEvent<ExtractionTimeoutEvent>) {
	const result = eventData.detail.detail;
	console.log('%c%s', 'color: fuchsia;', `[SELPHID] extractionTimeout: ${result}`);
}

function onExceptionCaptured(eventData: CustomEvent<ExceptionCapturedEvent>) {
	const result = eventData.detail.detail;
	console.log('%c%s', 'color: fuchsia;', `[SELPHID] exceptionCaptured: ${result}`);
}

function onErrorTimeout(eventData: CustomEvent<ErrorTimeoutEvent>) {
	const result = eventData.detail.detail;
	console.log('%c%s', 'color: fuchsia;', `[SELPHID] errorTimeout: ${result}`);
	widgetContainer.innerHTML = "Some error has occurred during the document data extraction process.";
}
