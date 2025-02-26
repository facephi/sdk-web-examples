import { Language } from '@facephi/selphid-web-component';
import type { ExtractionFinishEvent } from '@facephi/selphid-web-component';

export default function SelphIDComponent({
	setWidget,
}: { setWidget: React.Dispatch<React.SetStateAction<string>> }) {
	function handleExtractionFinish(event: CustomEvent<ExtractionFinishEvent>) {
		const resultMessage =
			event.detail.detail?.result?.images?.backDocument &&
			event.detail.detail?.result?.images?.frontDocument
				? 'OK'
				: 'KO';
		console.log('%c%s', 'color: fuchsia;', `[SELPHID] extractionFinish: ${resultMessage}`);
		setWidget('finish');
	}

	return (
		<facephi-selphid-widget
			language={Language.ES}
			previewCapture={true}
			onextractionFinish={handleExtractionFinish}
		/>
	);
}
