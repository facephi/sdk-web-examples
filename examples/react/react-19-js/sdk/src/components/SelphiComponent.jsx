import { useEffect, useRef } from 'react';

export default function SelphiComponent({ widgetEvent }) {
	const widgetRef = useRef(null);

	// SelphID config
	const selphi = {
		initialTip: true,
		initialTipWidth: 300,
		initialTipHeight: 300,
		stabilizationStage: true,
		language: 'ES',
		interactible: true,
		previewCapture: true,
		timeout: 30000,
		showLog: false,
	};

	useEffect(() => {
		// Widget configuration
		widgetRef.current.setAttribute('initial-tip', selphi.initialTip);
		widgetRef.current.setAttribute('initial-tip-width', selphi.initialTipWidth);
		widgetRef.current.setAttribute('initial-tip-height', selphi.initialTipHeight);
		widgetRef.current.setAttribute('stabilization-stage', selphi.stabilizationStage);
		widgetRef.current.setAttribute('language', selphi.language);
		widgetRef.current.setAttribute('interactible', selphi.interactible);
		widgetRef.current.setAttribute('preview-capture', selphi.previewCapture);
		widgetRef.current.setAttribute('timeout', selphi.timeout);
		widgetRef.current.setAttribute('show-log', selphi.showLog);
		// Widget events subscriptions
		widgetRef.current.addEventListener('extractionFinish', onExtractionFinish);
		widgetRef.current.addEventListener('extractionTimeout', onExtractionTimeout);
		widgetRef.current.addEventListener('exceptionCaptured', onExceptionCaptured);
		widgetRef.current.addEventListener('errorTimeout', onErrorTimeout);
	}, []);

	/* Widget events handlers */
	function onExtractionFinish(event) {
		const result = event.detail.detail;
		console.warn('[SELPHI] extractionFinish:', result);
		widgetEvent({ type: result.eventType });
	}

	function onExtractionTimeout(event) {
		const result = event.detail.detail;
		console.warn('[SELPHI] extractionTimeout:', result);
		widgetEvent({ type: result.eventType });
	}

	function onExceptionCaptured(event) {
		const result = event.detail.detail;
		console.warn('[SELPHI] exceptionCaptured:', result);
		widgetEvent({ type: result.eventType });
	}

	function onErrorTimeout(event) {
		const result = event.detail.detail;
		console.warn('[SELPHI] errorTimeout:', result);
		widgetEvent({ type: result.eventType });
	}

	return <facephi-selphi-widget ref={widgetRef} />;
}
