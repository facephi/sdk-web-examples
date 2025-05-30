import { FacephiSelphidWidget } from '@facephi/sdk-web-react';
import {
	type ExtractionFinishEvent,
	type ExtractionTimeoutEvent,
	type ExceptionCapturedEvent,
	type ErrorTimeoutEvent,
	Language,
	type WidgetLoadedEvent,
	type TimeoutButtonClickEvent,
	type TrackStatusEvent,
	type UserCancelEvent,
} from '@facephi/selphid-web-component';
import { Logger, LoggerType } from '../utils/Logger';

export default function SelphIDComponent({ setWidget }: { setWidget: React.Dispatch<React.SetStateAction<string>> }) {
	// SelphID Events
	function handleModuleLoaded(event: CustomEvent<WidgetLoadedEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'widgetLoaded', result);
	}

	function handleExtractionFinish(event: CustomEvent<ExtractionFinishEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'extractionFinish', result);
		// Redirect to Selphi
		setWidget('selphi');
	}

	function handleExtractionTimeout(event: CustomEvent<ExtractionTimeoutEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'extractionTimeout', result);
	}

	function handleExceptionCaptured(event: CustomEvent<ExceptionCapturedEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'exceptionCaptured', result);
	}

	function handleTimeoutButtonClick(event: CustomEvent<TimeoutButtonClickEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'timeoutButtonClick', result);
	}

	function handleErrorTimeout(event: CustomEvent<ErrorTimeoutEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'errorTimeout', result);
	}

	function handleTrackStatus(event: CustomEvent<TrackStatusEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'trackStatus', result);
	}

	function handleUserCancel(event: CustomEvent<UserCancelEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'userCancel', result);
	}

	return (
		<FacephiSelphidWidget
			country={'ES'}
			language={Language.ES}
			previewCapture={true}
			captureTimeout={10}
			captureRetries={3}
			showLog={false}
			onModuleLoaded={handleModuleLoaded}
			onExtractionFinish={handleExtractionFinish}
			onExtractionTimeout={handleExtractionTimeout}
			onExceptionCaptured={handleExceptionCaptured}
			onErrorTimeout={handleErrorTimeout}
			onTimeoutErrorButtonClick={handleTimeoutButtonClick}
			onTrackStatus={handleTrackStatus}
			onUserCancel={handleUserCancel}
		/>
	);
}
