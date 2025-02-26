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
import { instanceSelphiWidget } from './selphi';

export function demo() {
	const sdkProvider = document.getElementById('facephiSdkProvider') as any;
	const apiKey = (import.meta as any).env.VITE_LICENSE_KEY;

	// SDK Provider config
	sdkProvider.setAttribute('apikey', apiKey);
	sdkProvider.setAttribute('steps', 'START,SELPHI_WIDGET,SELPHID_WIDGET,FINISH');
	sdkProvider.setAttribute('type', 'ONBOARDING');
	sdkProvider.setAttribute('customerId', 'sdk-wc-javascript-example');
	sdkProvider.setAttribute('language', 'es');
	sdkProvider.setAttribute('disabled', true);

	// SDK Provider event subscriptions
	sdkProvider.addEventListener('emitData', onEmitData);
	sdkProvider.addEventListener('emitError', onEmitError);

	// SDK Provider event handlers
	function onEmitData(eventData: CustomEvent<{ operationId: string; sessionId: string; extraData: string }>) {
		const result = eventData.detail;
		console.log(
			'%c%s',
			'color: lime;',
			`[PROVIDER] emitData: operationId(${result.operationId}), sessionId(${result.sessionId}), extraData(${result.extraData})`,
		);
	}

	function onEmitError(eventData: CustomEvent<{ statusCode: number; message: string }>) {
		const result = eventData.detail;
		console.log(
			'%c%s',
			'color: lime;',
			`'[PROVIDER] EmitError: statusCode(${result.statusCode}), message(${result.message}) ',`,
		);
	}

	// Load first widget
	instanceSelphiWidget();
}
