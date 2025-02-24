// eslint-disable-next-line react/prop-types
export default function SelphIDComponent({ setWidget }) {
	
	function handleExtractionFinish(event) {
		const resultMessage = event.detail.detail?.result?.images?.backDocument && event.detail.detail?.result?.images?.frontDocument ? 'OK' : 'KO';
		console.log('%c%s', 'color: fuchsia;', `[SELPHID] extractionFinish: ${resultMessage}`);
		setWidget('finish');
	}
	
	return (
		<facephi-selphid-widget
			language="en"
			previewCapture={true}
			onextractionFinish={handleExtractionFinish}
		/>
	);
}
