'use client';
import { FacephiSdkProvider, TypeFamily } from '@facephi/sdk-web-react';
import { defineCustomElements } from '@facephi/sdk-web-wc/loader';
import { useState, type ReactNode } from 'react';
import { Logger, LoggerType } from '../../utils/Logger';

export default function SdkProvider({ children }: { children: ReactNode }) {
	defineCustomElements(window);

	const [widgetIsActive, setWidgetIsActive] = useState(false);
	const apiKey = process.env.NEXT_PUBLIC_API_KEY ?? '';

	// PRVIDER Events
	function handleEmitData(event: CustomEvent<{ operationId: string; sessionId: string; extraData: string }>) {
		const result = event.detail;
		Logger.printLog(LoggerType.SDK_PROVIDER, 'onEmitData', result);
	}

	function handleEmitError(event: CustomEvent<{ statusCode: number; message: string }>) {
		const result = event.detail;
		Logger.printLog(LoggerType.SDK_PROVIDER, 'onEmitError', result);
	}

	function handleEmitOperationId(event: CustomEvent<string>) {
		const result = event.detail;
		Logger.printLog(LoggerType.SDK_PROVIDER, 'onEmitOperationId', result);
		// Set widget as active only after provider is loaded to ensure proper initialization order
		setWidgetIsActive(true);
	}

	return (
		<FacephiSdkProvider
			apikey={apiKey}
			steps='START,SELPHI_WIDGET,SELPHID_WIDGET,FINISH'
			customerId='facephi-sdk-next12-example'
			type={TypeFamily.onboarding}
			onEmitOperationId={handleEmitOperationId}
			onEmitData={handleEmitData}
			onEmitError={handleEmitError}
		>
			{widgetIsActive && children}
		</FacephiSdkProvider>
	);
}
