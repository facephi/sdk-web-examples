import  {  FacephiSelphidWidget, Language  } from '@facephi/sdk-web-react';
import type { ExtractionFinishEvent, ExtractionTimeoutEvent, ExceptionCapturedEvent  } from '@facephi/selphid-web-component';


export default function SelphIDComponent({ setWidget }: { setWidget: React.Dispatch<React.SetStateAction<string>> }) {

	// SelphID Events
	function handleExtractionFinish(event: CustomEvent<ExtractionFinishEvent>) {
		const resultMessage = event.detail.detail?.result?.images?.backDocument && event.detail.detail?.result?.images?.frontDocument ? 'OK' : 'KO';
		console.log('%c%s', 'color: fuchsia;', `[SELPHID] extractionFinish: ${resultMessage}`);
		setWidget('finish');
	}

	function handleExtractionTimeout(event: CustomEvent<ExtractionTimeoutEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: fuchsia;', `[SELPHID] extractionTimeout: ${result?.message}`);
	}

	function handleExceptionCaptured(event: CustomEvent<ExceptionCapturedEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: fuchsia;', `[SELPHID] exceptionCaptured: ${result?.message}`);
	}

	return (
		<FacephiSelphidWidget
			initialTip={true}
			initialTipHeight={350}
			initialTipWidth={350}
			country={ 'ES' }
			language={Language.es}
			previewCapture={true}
			captureTimeout={10}
			captureRetries={3}
			showLog={false}
			onExtractionFinish={handleExtractionFinish}
			onExtractionTimeout={handleExtractionTimeout}
			onExceptionCaptured={handleExceptionCaptured}
		/>
	);
}
