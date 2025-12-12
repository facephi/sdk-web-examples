import type {
	SelphidWidgetLoadedEvent,
	FacephiSelphidWidgetCustomEvent,
	SelphidExtractionFinishEvent,
	SelphidExtractionTimeoutEvent,
	SelphidExceptionCapturedEvent,
	SelphidErrorTimeoutEvent,
	SelphidTimeoutButtonClickEvent,
	SelphidUserCancelEvent,
	SelphidTrackStatusEvent,
} from '@facephi/sdk-web-wc';
import { Logger, LoggerType } from '../utils/Logger';

export default function SelphIDComponent({ setWidget }: { setWidget: React.Dispatch<React.SetStateAction<string>> }) {
	// SelphID Events
	function handleModuleLoaded(event: FacephiSelphidWidgetCustomEvent<SelphidWidgetLoadedEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'widgetLoaded', result);
	}
	function handleExtractionFinish(event: FacephiSelphidWidgetCustomEvent<SelphidExtractionFinishEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'extractionFinish', result);
		// Redirect to Selphi
		setWidget('selphi');
	}

	function handleExtractionTimeout(event: FacephiSelphidWidgetCustomEvent<SelphidExtractionTimeoutEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'extractionTimeout', result);
	}

	function handleExceptionCaptured(event: FacephiSelphidWidgetCustomEvent<SelphidExceptionCapturedEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'exceptionCaptured', result);
	}

	function handleTimeoutButtonClick(event: FacephiSelphidWidgetCustomEvent<SelphidTimeoutButtonClickEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'timeoutButtonClick', result);
	}

	function handleErrorTimeout(event: FacephiSelphidWidgetCustomEvent<SelphidErrorTimeoutEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'errorTimeout', result);
	}

	function handleTrackStatus(event: FacephiSelphidWidgetCustomEvent<SelphidTrackStatusEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'trackStatus', result);
	}

	function handleUserCancel(event: FacephiSelphidWidgetCustomEvent<SelphidUserCancelEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'userCancel', result);
	}

	return (
		<facephi-selphid-widget
			country={'ES'}
			previewImage={true}
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
