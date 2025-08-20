import { Logger, LoggerType } from '../utils/Logger';

export default function SelphiComponent({ setWidget }) {
	// Selphi Events
	function handleModuleLoaded(event) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'widgetLoaded', result);
	}

	function handleExtractionFinish(event) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'extractionFinish', result);
		// Redirect to the finish component
		setWidget('finish');
	}

	function handleExtractionTimeout(event) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'extractionTimeout', result);
	}

	function handleExceptionCaptured(event) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'exceptionCaptured', result);
	}

	function handleErrorTimeout(event) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'errorTimeout', result);
	}

	function handleTimeoutButtonClick(event) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'timeoutButtonClick:', result);
	}

	function handleUserCancel(event) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'userCancel', result);
	}

	function handleTrackStatus(event) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'trackStatus', result);
	}

	function handleStabilizing(event) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'stabilizing', result);
	}

	return (
		<facephi-selphi-widget
			stabilizationStage={true}
			language='ES'
			interactible={true}
			previewImage={true}
			timeout={30000}
			showLog={false}
			onmoduleLoaded={handleModuleLoaded}
			onextractionFinish={handleExtractionFinish}
			onextractionTimeout={handleExtractionTimeout}
			onexceptionCaptured={handleExceptionCaptured}
			ontimeoutErrorButtonClick={handleTimeoutButtonClick}
			onerrorTimeout={handleErrorTimeout}
			onuserCancel={handleUserCancel}
			ontrackStatus={handleTrackStatus}
			onstabilizing={handleStabilizing}
		/>
	);
}
