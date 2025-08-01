'use client';
import {
	type WidgetLoadedEvent,
	type ExtractionFinishEvent,
	type ExceptionCapturedEvent,
	type ExtractionTimeoutEvent,
	type TimeoutButtonClickEvent,
	type ErrorTimeoutEvent,
	type UserCancelEvent,
	type TrackStatusEvent,
	type StabilizingEvent,
	Language,
} from '@facephi/selphi-web-component';
import { Logger, LoggerType } from '../../utils/Logger';

interface SelphiProps {
	onComplete: () => void;
}

export default function Selphi({ onComplete }: SelphiProps) {
	// SELPHI Events
	function handleModuleLoaded(event: CustomEvent<WidgetLoadedEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'widgetLoaded', result);
	}

	function handleExtractionFinish(event: CustomEvent<ExtractionFinishEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'extractionFinish', result);
		onComplete();
	}

	function handleExtractionTimeout(event: CustomEvent<ExtractionTimeoutEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'extractionTimeout', result);
	}

	function handleExceptionCaptured(event: CustomEvent<ExceptionCapturedEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'exceptionCaptured', result);
	}

	function handleTimeoutButtonClick(event: CustomEvent<TimeoutButtonClickEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'timeoutButtonClick', result);
	}

	function handleErrorTimeout(event: CustomEvent<ErrorTimeoutEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'errorTimeout', result);
	}

	function handleUserCancel(event: CustomEvent<UserCancelEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'userCancel', result);
	}

	function handleTrackStatus(event: CustomEvent<TrackStatusEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'trackStatus', result);
	}

	function handleStabilizing(event: CustomEvent<StabilizingEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'stabilizing', result);
	}

	return (
		<facephi-selphi-widget
			stabilizationStage={true}
			language={Language.ES}
			interactible={true}
			previewCapture={true}
			timeout={30000}
			showLog={false}
			onModuleLoaded={handleModuleLoaded}
			onExtractionFinish={handleExtractionFinish}
			onExtractionTimeout={handleExtractionTimeout}
			onExceptionCaptured={handleExceptionCaptured}
			onTimeoutErrorButtonClick={handleTimeoutButtonClick}
			onErrorTimeout={handleErrorTimeout}
			onUserCancel={handleUserCancel}
			onTrackStatus={handleTrackStatus}
			onStabilizing={handleStabilizing}
		/>
	);
}
