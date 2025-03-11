export default function SelphiComponent({ setWidget }) {
	// Selphi Events
	function handleModuleLoaded(event) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #00FFFF;', '[SELPHI] widgetLoaded:', result);
	}
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

	function hanldeTimeoutButtonClick(event) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #00FFFF;', '[SELPHI] timeoutButtonClick:', result);
	}

	function handleUserCancel(event) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #00FFFF;', '[SELPHI] userCancel:', result);
	}

	function hanldeTrackStatus(event) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #00FFFF;', '[SELPHI] trackStatus:', result);
	}

	function handleStabilizing(event) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #00FFFF;', '[SELPHI] stabilizing:', result);
	}

	return (
		<facephi-selphi-widget
			stabilizationStage={true}
			language='ES'
			interactible={true}
			previewCapture={true}
			timeout={30000}
			showLog={false}
			onmoduleLoaded={handleModuleLoaded}
			onextractionFinish={handleExtractionFinish}
			onextractionTimeout={handleExtractionTimeout}
			onexceptionCaptured={handleExceptionCaptured}
			ontimeoutErrorButtonClick={hanldeTimeoutButtonClick}
			onerrorTimeout={handleErrorTimeout}
			onuserCancel={handleUserCancel}
			ontrackStatus={hanldeTrackStatus}
			onstabilizing={handleStabilizing}
		/>
	);
}
