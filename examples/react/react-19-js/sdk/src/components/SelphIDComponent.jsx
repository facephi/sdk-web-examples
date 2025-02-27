export default function SelphIDComponent({ setWidget }) {
	
	// SelphID Events
	function handleExtractionFinish(event) {
		const resultMessage = event.detail.detail?.result?.images?.backDocument && event.detail.detail?.result?.images?.frontDocument ? 'OK' : 'KO';
		console.log('%c%s', 'color: fuchsia;', `[SELPHID] extractionFinish: ${resultMessage}`);
		setWidget('finish');
	}

	function handleExtractionTimeout(event) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: fuchsia;', `[SELPHID] extractionTimeout: ${result?.message}`);
	}

	function handleExceptionCaptured(event) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: fuchsia;', `[SELPHID] exceptionCaptured: ${result?.message}`);
	}
	
	return (
		<facephi-selphid-widget
			initialTip={true}
			initialTipHeight={350}
			initialTipWidth={350}
			country={ 'ES' }
			language="es"
			previewCapture={true}
			captureTimeout={10}
			captureRetries={3}
			showLog={false}
			onextractionFinish={handleExtractionFinish}
			onextractionTimeout={handleExtractionTimeout}
			onexceptionCaptured={handleExceptionCaptured}
		/>
	);
}
