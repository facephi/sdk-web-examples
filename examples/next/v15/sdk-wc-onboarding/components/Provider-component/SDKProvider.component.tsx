'use client';
import '@facephi/sdk-web-wc';
import { TypeFamily } from '@facephi/sdk-web-wc';
import type { ReactNode } from 'react';
import React from 'react';
import { Logger, LoggerType } from '../../utils/Logger';

// Define Facephi Components
import '@facephi/sdk-web-wc';
import { defineCustomElements } from '@facephi/sdk-web-wc/loader';

// Bind the custom elements to the window object
defineCustomElements(window);


export default function SdkProvider({ children }: { children: ReactNode }) {

	const apiKey = process.env.NEXT_PUBLIC_API_KEY ?? '';

	// PROVIDER Events
	function handleEmitData(event: CustomEvent<{ operationId: string; sessionId: string; extraData: string }>) {
		const result = event.detail;
		Logger.printLog(LoggerType.SDK_PROVIDER, 'onEmitData', result);
	}

	function handleEmitError(event: CustomEvent<{ statusCode: number; message: string }>) {
		const result = event.detail;
		Logger.printLog(LoggerType.SDK_PROVIDER, 'onEmitError', result);
	}

	return (
		<facephi-sdk-provider
			apikey={apiKey}
			steps='START,SELPHID_WIDGET,SELPHI_WIDGET,FINISH'
			customerId='facephi-sdk-next12-example'
			type={TypeFamily.onboarding}
			onEmitData={handleEmitData}
			onEmitError={handleEmitError}
		>
			{children}
		</facephi-sdk-provider>
	);
}
