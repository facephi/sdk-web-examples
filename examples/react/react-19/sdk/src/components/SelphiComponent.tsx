import  {  Language } from '@facephi/sdk-web-react';
import type { ExtractionFinishEvent } from '@facephi/selphi-web-component';

export default function SelphiComponent({ setWidget }: { setWidget: React.Dispatch<React.SetStateAction<string>> }) {

	function handleExtractionFinish(event: CustomEvent<ExtractionFinishEvent>) {
		const resultMessage = event.detail.detail?.extractionData?.bestImage?.data ? 'OK' : 'KO';
		console.log('%c%s', 'color: cyan;', `[SELPHI] extractionFinish: ${resultMessage}`);
		setWidget('selphid');
	}

	return (
		<facephi-selphi-widget
			initialTip={true}
			initialTipHeight={200}
			initialTipWidth={200}
			language={Language.en}
			stabilizationStage={true}
			previewCapture={true}
			onextractionFinish={handleExtractionFinish}
		/>
	);
}
