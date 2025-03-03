export default function SelphiComponent({ setWidget }) {
	// Selphi Events
	function handleExtractionFinish(event) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #00FFFF;', '[SELPHI] extractionFinish:', result);
		// Redirect to SelphID
		setWidget('selphid');
	}

	function handleExtractionTimeout(event) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #00FFFF;', '[SELPHI] extractionTimeout:', result);
	}

	function handleExceptionCaptured(event) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #00FFFF;', '[SELPHI] exceptionCaptured:', result);
	}

	function handleErrorTimeout(event) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #00FFFF;', '[SELPHI] errorTimeout:', result);
	}

	return (
		<facephi-selphi-widget
			stabilizationStage={true}
			language='ES'
			interactible={true}
			previewCapture={true}
			timeout={30000}
			showLog={false}
			onextractionFinish={handleExtractionFinish}
			onextractionTimeout={handleExtractionTimeout}
			onexceptionCaptured={handleExceptionCaptured}
			onerrorTimeout={handleErrorTimeout}
		/>
	);
}
