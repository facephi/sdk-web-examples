import { useEffect, useRef } from 'react';

export default function SelphIDComponent({ widgetEvent }) {
	const widgetRef = useRef(null);

	// SelphID config
	const selphid = {
		initialTip: true,
		initialTipWidth: 300,
		initialTipHeight: 300,
		country: ['ES'],
		language: 'es',
		previewCapture: true,
		captureTimeout: 10,
		captureRetries: 3,
		showLog: false,
	};

	useEffect(() => {
		// Widget configuration
		widgetRef.current.setAttribute('initial-tip', selphid.initialTip);
		widgetRef.current.setAttribute('initial-tip-width', selphid.initialTipWidth);
		widgetRef.current.setAttribute('initial-tip-height', selphid.initialTipHeight);
		widgetRef.current.setAttribute('country', selphid.country);
		widgetRef.current.setAttribute('language', selphid.language);
		widgetRef.current.setAttribute('preview-capture', selphid.previewCapture);
		widgetRef.current.setAttribute('capture-timeout', selphid.captureTimeout);
		widgetRef.current.setAttribute('capture-retries', selphid.captureRetries);
		widgetRef.current.setAttribute('show-log', selphid.showLog);
		// Widget events subscriptions
		widgetRef.current.addEventListener('extractionFinish', onExtractionFinish);
		widgetRef.current.addEventListener('extractionTimeout', onExtractionTimeout);
		widgetRef.current.addEventListener('exceptionCaptured', onExceptionCaptured);
		widgetRef.current.addEventListener('errorTimeout', onErrorTimeout);
	}, []);

	/* Widget events handlers */
	function onExtractionFinish(event) {
		const result = event.detail.detail;
		console.warn('[SELPHID] extractionFinish:', result);
		widgetEvent({ type: result.eventType });
	}

	function onExtractionTimeout(event) {
		const result = event.detail.detail;
		console.warn('[SELPHID] extractionTimeout:', result);
		widgetEvent({ type: result.eventType });
	}

	function onExceptionCaptured(event) {
		const result = event.detail.detail;
		console.warn('[SELPHID] exceptionCaptured:', result);
		widgetEvent({ type: result.eventType });
	}

	function onErrorTimeout(event) {
		const result = event.detail.detail;
		console.warn('[SELPHID] errorTimeout:', result);
		widgetEvent({ type: result.eventType });
	}

	return <facephi-selphid-widget ref={widgetRef} />;
}
