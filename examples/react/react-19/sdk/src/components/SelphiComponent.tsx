import type { ExtractionFinishEvent, ExtractionTimeoutEvent, ExceptionCapturedEvent } from '@facephi/selphi-web-component';
import { Language } from '@facephi/sdk-web-wc';

export default function SelphiComponent({
	setWidget,
}: { setWidget: React.Dispatch<React.SetStateAction<string>> }) {
	
	// Selphi Events
	function handleExtractionFinish(event: CustomEvent<ExtractionFinishEvent>) {
		const resultMessage = event.detail.detail?.extractionData?.bestImage?.data ? 'OK' : 'KO';
		console.log('%c%s', 'color: cyan;', `[SELPHI] extractionFinish: ${resultMessage}`);
		setWidget('selphid');
	}

	function handleExtractionTimeout(event: CustomEvent<ExtractionTimeoutEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: cyan;', `[SELPHI] extractionTimeout: ${result}`);
	}

	function handleExceptionCaptured(event: CustomEvent<ExceptionCapturedEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: cyan;', `[SELPHI] exceptionCaptured: ${result?.message}`);
	}

	return (
		<facephi-selphi-widget
			initialTip={true}
			disableExit={false}
			stabilizationStage={false}
			language={Language.es}
			onextractionFinish={handleExtractionFinish}
			onextractionTimeout={handleExtractionTimeout}
			onexceptionCaptured={handleExceptionCaptured}
		/>
	);
}
