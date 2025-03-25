import { Logger, LoggerType } from '../utils/Logger';

export default function SelphIDComponent({ setWidget }) {
	// SelphID Events

	function handleModuleLoaded(event) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'widgetLoaded', result);
	}

	function handleExtractionFinish(event) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'extractionFinish', result);

		// Redirect to Selphi
		setWidget('selphi');
	}

	function handleExtractionTimeout(event) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'extractionTimeout', result);
		Logger.printLog(LoggerType.SELPHID, 'extractionFinish', result);
	}

	function handleExceptionCaptured(event) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'exceptionCaptured', result);
	}

	function handleTimeoutButtonClick(event) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'timeoutButtonClick', result);
	}

	function handleErrorTimeout(event) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'errorTimeout', result);
	}

	function handleTrackStatus(event) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'trackStatus', result);
	}

	function handleUserCancel(event) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'userCancel', result);
	}

	return (
		<facephi-selphid-widget
			country={'ES'}
			language='ES'
			previewCapture={true}
			captureTimeout={10}
			captureRetries={3}
			showLog={false}
			onmoduleLoaded={handleModuleLoaded}
			onextractionFinish={handleExtractionFinish}
			onextractionTimeout={handleExtractionTimeout}
			onexceptionCaptured={handleExceptionCaptured}
			onerrorTimeout={handleErrorTimeout}
			ontimeoutErrorButtonClick={handleTimeoutButtonClick}
			ontrackStatus={handleTrackStatus}
			onuserCancel={handleUserCancel}
		/>
	);
}
