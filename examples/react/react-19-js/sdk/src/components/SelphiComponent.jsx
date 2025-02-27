export default function SelphiComponent({ setWidget}) {

	// Selphi Events
	function handleExtractionFinish(event) {
		const resultMessage = event.detail.detail?.extractionData?.bestImage?.data ? 'OK' : 'KO';
		console.log('%c%s', 'color: cyan;', `[SELPHI] extractionFinish: ${resultMessage}`);
		setWidget('selphid');
	}

	function handleExtractionTimeout(event) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: cyan;', `[SELPHI] extractionTimeout: ${result}`);
	}

	function handleExceptionCaptured(event) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: cyan;', `[SELPHI] exceptionCaptured: ${result?.message}`);
	}

	return (
		<facephi-selphi-widget
			initialTip={true}
			disableExit={false}
			stabilizationStage={false}
			language="es"
			onextractionFinish={handleExtractionFinish}
			onextractionTimeout={handleExtractionTimeout}
			onexceptionCaptured={handleExceptionCaptured}
		/>
	);
}
