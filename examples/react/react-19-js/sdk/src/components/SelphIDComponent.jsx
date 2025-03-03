export default function SelphIDComponent({ setWidget }) {
	// SelphID Events
	function handleExtractionFinish(event) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #FF00FF;', '[SELPHID] extractionFinish:', result);
		// Rederect to Finisg
		setWidget('finish');
	}

	function handleExtractionTimeout(event) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #FF00FF;', '[SELPHID] extractionTimeout:', result);
	}

	function handleExceptionCaptured(event) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #FF00FF;', '[SELPHID] exceptionCaptured:', result);
	}

	function handleErrorTimeout(event) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #FF00FF;', '[SELPHID] errorTimeout:', result);
	}

	return (
		<facephi-selphid-widget
			country={'ES'}
			language='ES'
			previewCapture={true}
			captureTimeout={10}
			captureRetries={3}
			showLog={false}
			onextractionFinish={handleExtractionFinish}
			onextractionTimeout={handleExtractionTimeout}
			onexceptionCaptured={handleExceptionCaptured}
			onerrorTimeout={handleErrorTimeout}
		/>
	);
}
