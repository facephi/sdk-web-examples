/**
 * Facephi SDK Provider Configuration Example
 *
 * WARNING:
 * This is an example of the implementation of the Web SDK Library.
 * All the properties, events and methods used in this examples are implemented as orientation to a better performance in coding.
 *
 * Please, consider to check the documentation before editing the code.
 *
 * We recommend to remove all the console logs and use actual code.
 *
 */
import { initSelphiWidget } from './selphi-widget';

(async () => {
	await customElements.whenDefined('facephi-sdk-provider');

	// SDK Provider event handlers
	function handleEmitData(event: CustomEvent<{ operationId: string; sessionId: string; extraData: string }>) {
		const result = event.detail;
		console.log(
			'%c%s%s\n%s\n%s\n%s',
			'color: #00FF00;',
			'[PROVIDER] onEmitData:',
			'',
			`operationId: ${result.operationId}`,
			`sessionId: ${result.sessionId}`,
			`extraData: ${result.extraData}`,
		);
	}

	function handleEmitError(event: CustomEvent<{ statusCode: number; message: string }>) {
		const result = event.detail;
		console.log(
			'%c%s%s\n%s',
			'color: #00FF00;',
			'[PROVIDER] onEmitError:',
			'',
			`statusCode: ${result.statusCode}`,
			`message: ${result.message}`,
		);
	}

	const sdkProvider = document.querySelector('facephi-sdk-provider');
	if (sdkProvider) {
		sdkProvider.addEventListener('emitData', handleEmitData);
		sdkProvider.addEventListener('emitError', handleEmitError);
		// Initializes the Selphi widget
		initSelphiWidget(sdkProvider);
	}
})();
