'use client';
import { FacephiSelphidWidget } from '@facephi/sdk-web-react';

import {
	type WidgetLoadedEvent,
	type ExtractionFinishEvent,
	type ExceptionCapturedEvent,
	type TimeoutButtonClickEvent,
	type ExtractionTimeoutEvent,
	type ErrorTimeoutEvent,
	type TrackStatusEvent,
	type UserCancelEvent,
	Language,
} from '@facephi/selphid-web-component';
import { Logger, LoggerType } from '../../utils/Logger';

interface SelphidProps {
	onComplete: () => void;
}

export default function Selphi({ onComplete }: SelphidProps) {
	// SelphID Events
	function handleModuleLoaded(event: CustomEvent<WidgetLoadedEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'widgetLoaded', result);
	}

	function handleExtractionFinish(event: CustomEvent<ExtractionFinishEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'extractionFinish', result);
		onComplete();
	}

	function handleExtractionTimeout(event: CustomEvent<ExtractionTimeoutEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHID, 'extractionTimeout', result);
		Logger.printLog(LoggerType.SELPHID, 'extractionFinish', result);
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
