'use client';
import { FacephiSelphiWidget } from '@facephi/sdk-web-react';
import type {
	SelphiWidgetLoadedEvent,
	SelphiExtractionFinishEvent,
	SelphiExtractionTimeoutEvent,
	SelphiExceptionCapturedEvent,
	SelphiErrorTimeoutEvent,
	SelphiTimeoutButtonClickEvent,
	SelphiUserCancelEvent,
	SelphiStabilizingEvent,
	SelphiTrackStatusEvent,
	FacephiSelphiWidgetCustomEvent,
} from '@facephi/sdk-web-wc';
import { Logger, LoggerType } from '../../utils/Logger';

interface SelphiProps {
	onComplete: () => void;
}

export default function Selphi({ onComplete }: SelphiProps) {
	// SELPHI Events
	function handleModuleLoaded(event: FacephiSelphiWidgetCustomEvent<SelphiWidgetLoadedEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'widgetLoaded', result);
	}

	function handleExtractionFinish(event: FacephiSelphiWidgetCustomEvent<SelphiExtractionFinishEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'extractionFinish', result);
		onComplete();
	}

	function handleExtractionTimeout(event: FacephiSelphiWidgetCustomEvent<SelphiExtractionTimeoutEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'extractionTimeout', result);
	}

	function handleExceptionCaptured(event: FacephiSelphiWidgetCustomEvent<SelphiExceptionCapturedEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'exceptionCaptured', result);
	}

	function handleTimeoutButtonClick(event: FacephiSelphiWidgetCustomEvent<SelphiTimeoutButtonClickEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'timeoutButtonClick', result);
	}

	function handleErrorTimeout(event: FacephiSelphiWidgetCustomEvent<SelphiErrorTimeoutEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'errorTimeout', result);
	}

	function handleUserCancel(event: FacephiSelphiWidgetCustomEvent<SelphiUserCancelEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'userCancel', result);
	}

	function handleTrackStatus(event: FacephiSelphiWidgetCustomEvent<SelphiTrackStatusEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'trackStatus', result);
	}

	function handleStabilizing(event: FacephiSelphiWidgetCustomEvent<SelphiStabilizingEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'stabilizing', result);
	}

	return (
		<FacephiSelphiWidget
			stabilizationStage={true}
			interactible={true}
			previewImage={true}
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
