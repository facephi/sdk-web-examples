import {
	type ExtractionFinishEvent,
	type ExtractionTimeoutEvent,
	type ExceptionCapturedEvent,
	type ErrorTimeoutEvent,
	Language,
} from '@facephi/selphi-web-component';

export default function SelphiComponent({ setWidget }: { setWidget: React.Dispatch<React.SetStateAction<string>> }) {
	// Selphi Events
	function handleExtractionFinish(event: CustomEvent<ExtractionFinishEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #00FFFF;', '[SELPHI] extractionFinish:', result);
		// Redirect to SelphID
		setWidget('selphid');
	}

	function handleExtractionTimeout(event: CustomEvent<ExtractionTimeoutEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #00FFFF;', '[SELPHI] extractionTimeout:', result);
	}

	function handleExceptionCaptured(event: CustomEvent<ExceptionCapturedEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #00FFFF;', '[SELPHI] exceptionCaptured:', result);
	}

	function handleErrorTimeout(event: CustomEvent<ErrorTimeoutEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #00FFFF;', '[SELPHI] errorTimeout:', result);
	}

	return (
		<facephi-selphi-widget
			stabilizationStage={true}
			language={Language.ES}
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
