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

interface SelphidProps {
	onComplete: () => void;
}

export default function Selphi({ onComplete }: SelphidProps) {
	// SelphID Events
	function handleModuleLoaded(event: CustomEvent<WidgetLoadedEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #FF00FF;', '[SELPHID] widgetLoaded:', result);
	}

	function handleExtractionFinish(event: CustomEvent<ExtractionFinishEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #FF00FF;', '[SELPHID] extractionFinish:', result);
		onComplete();
	}

	function handleExtractionTimeout(event: CustomEvent<ExtractionTimeoutEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #FF00FF;', '[SELPHID] extractionTimeout:', result);
	}

	function handleExceptionCaptured(event: CustomEvent<ExceptionCapturedEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #FF00FF;', '[SELPHID] exceptionCaptured:', result);
	}

	function hanldeTimeoutButtonClick(event: CustomEvent<TimeoutButtonClickEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #FF00FF;', '[SELPHID] timeoutButtonClick:', result);
	}

	function handleErrorTimeout(event: CustomEvent<ErrorTimeoutEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #FF00FF;', '[SELPHID] errorTimeout:', result);
	}

	function hanldeTrackStatus(event: CustomEvent<TrackStatusEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #FF00FF;', '[SELPHID] trackStatus:', result);
	}

	function handleUserCancel(event: CustomEvent<UserCancelEvent>) {
		const result = event.detail.detail;
		console.log('%c%s', 'color: #FF00FF;', '[SELPHID] userCancel:', result);
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
			onTimeoutErrorButtonClick={hanldeTimeoutButtonClick}
			onTrackStatus={hanldeTrackStatus}
			onUserCancel={handleUserCancel}
		/>
	);
}
