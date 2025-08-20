'use client';
import {
	ErrorData,
	FacephiSdkProvider,
	TypeFamily,
} from '@facephi/sdk-web-react';
import { defineCustomElements } from '@facephi/sdk-web-wc/loader';
import type { ReactNode } from 'react';
import { Logger, LoggerType } from '../../utils/Logger';

export default function SdkProvider({ children }: { children: ReactNode }) {
	defineCustomElements(window);

	const apiKey = process.env.NEXT_PUBLIC_API_KEY ?? '';

	// PROVIDER Events
	function handleEmitData(event: CustomEvent<{ operationId: string; sessionId: string; extraData: string }>) {
		const result = event.detail;
		Logger.printLog(LoggerType.SDK_PROVIDER, 'onEmitData', result);
	}

	function handleEmitError(event: CustomEvent<ErrorData>) {
		const result = event.detail;
		Logger.printLog(LoggerType.SDK_PROVIDER, 'onEmitError', result);
	}

	return (
		<FacephiSdkProvider
			apikey={apiKey}
			steps='START,SELPHID_WIDGET,SELPHI_WIDGET,FINISH'
			customerId='facephi-sdk-react-next15-example'
			type={TypeFamily.onboarding}
			onEmitData={handleEmitData}
			onEmitError={handleEmitError}
		>
			{children}
		</FacephiSdkProvider>
	);
}
