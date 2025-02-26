import  {  FacephiSelphidWidget, Language } from '@facephi/sdk-web-react';
import type { ExtractionFinishEvent } from '@facephi/selphid-web-component';

export default function SelphIDComponent({ setWidget }: { setWidget: React.Dispatch<React.SetStateAction<string>> }) {

	function handleExtractionFinish(event: CustomEvent<ExtractionFinishEvent>) {
		const resultMessage = event.detail.detail?.result?.images?.backDocument && event.detail.detail?.result?.images?.frontDocument ? 'OK' : 'KO';
		console.log('%c%s', 'color: fuchsia;', `[SELPHID] extractionFinish: ${resultMessage}`);
		setWidget('finish');
	}


	return (
		<FacephiSelphidWidget
			initialTip={true}
			initialTipHeight={200}
			initialTipWidth={200}
			language={Language.es}
			previewCapture={true}
			onExtractionFinish={handleExtractionFinish}
		/>
	);
}
