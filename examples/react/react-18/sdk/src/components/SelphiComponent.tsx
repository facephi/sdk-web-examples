import { FacephiSelphiWidget } from '@facephi/sdk-web-react';
import {
	ExtractionFinishEvent,
	ExtractionTimeoutEvent,
	ExceptionCapturedEvent,
	ErrorTimeoutEvent,
	Language,
	TimeoutButtonClickEvent,
	UserCancelEvent,
	TrackStatusEvent,
	WidgetLoadedEvent,
} from '@facephi/selphi-web-component';

export default function SelphiComponent({ setWidget }: { setWidget: React.Dispatch<React.SetStateAction<string>> }) {
	// Selphi Events
	// Selphi Events
	function handleModuleLoaded(event: CustomEvent<WidgetLoadedEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #00FFFF;', '[SELPHI] widgetLoaded:', result);
	}

	function handleExtractionFinish(event: CustomEvent<ExtractionFinishEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #00FFFF;', '[SELPHI] extractionFinish:', result);
		// Redirect to SelphID
		setWidget('selphid');
	}

	function handleExtractionTimeout(event: CustomEvent<ExtractionTimeoutEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #00FFFF;', '[SELPHI] extractionTimeout:', result);
	}

	function handleExceptionCaptured(event: CustomEvent<ExceptionCapturedEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #00FFFF;', '[SELPHI] exceptionCaptured:', result);
	}

	function handleErrorTimeout(event: CustomEvent<ErrorTimeoutEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #00FFFF;', '[SELPHI] errorTimeout:', result);
	}

	function hanldeTimeoutButtonClick(event: CustomEvent<TimeoutButtonClickEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #00FFFF;', '[SELPHI] timeoutButtonClick:', result);
	}

	function handleUserCancel(event: CustomEvent<UserCancelEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #00FFFF;', '[SELPHI] userCancel:', result);
	}

	function hanldeTrackStatus(event: CustomEvent<TrackStatusEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #00FFFF;', '[SELPHI] trackStatus:', result);
	}

	return (
		<FacephiSelphiWidget
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
			onErrorTimeout={handleErrorTimeout}
			onTimeoutErrorButtonClick={hanldeTimeoutButtonClick}
			onTrackStatus={hanldeTrackStatus}
			onUserCancel={handleUserCancel}
		/>
	);
}
