// eslint-disable-next-line react/prop-types
export default function SelphiComponent({ setWidget }) {

	function handleExtractionFinish(event) {
		const resultMessage = event.detail.detail?.extractionData?.bestImage?.data ? 'OK' : 'KO';
		console.log('%c%s', 'color: cyan;', `[SELPHI] extractionFinish: ${resultMessage}`);
		setWidget('selphid');
	}	

	return (
		<facephi-selphi-widget
			initialTip={true}
			initialTipHeight={200}
			initialTipWidth={200}
			language="en"
			stabilizationStage={true}
			previewCapture={true}
			onextractionFinish={handleExtractionFinish}
		/>
	);
}
