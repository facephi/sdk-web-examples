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
	type StabilizingEvent,
} from '@facephi/selphi-web-component';
import { Logger, LoggerType } from '../utils/Logger';

export default function SelphiComponent({ setWidget }: { setWidget: React.Dispatch<React.SetStateAction<string>> }) {
	// Selphi Events
	function handleModuleLoaded(event: CustomEvent<WidgetLoadedEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'widgetLoaded', result);
	}

	function handleExtractionFinish(event: CustomEvent<ExtractionFinishEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'extractionFinish', result);
		// Redirect to the finish component
		setWidget('finish');
	}

	function handleExtractionTimeout(event: CustomEvent<ExtractionTimeoutEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'extractionTimeout', result);
	}

	function handleExceptionCaptured(event: CustomEvent<ExceptionCapturedEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'exceptionCaptured', result);
	}

	function handleErrorTimeout(event: CustomEvent<ErrorTimeoutEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'errorTimeout', result);
	}

	function handleTimeoutButtonClick(event: CustomEvent<TimeoutButtonClickEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'timeoutButtonClick:', result);
	}

	function handleUserCancel(event: CustomEvent<UserCancelEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'userCancel', result);
	}

	function handleTrackStatus(event: CustomEvent<TrackStatusEvent>) {
		const result = event.detail.detail;
		Logger.printLog(LoggerType.SELPHI, 'trackStatus', result);
	}

	function handleStabilizing(event: CustomEvent<StabilizingEvent>){
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
