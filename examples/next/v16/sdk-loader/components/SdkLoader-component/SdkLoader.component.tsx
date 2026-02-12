'use client';

import { useEffect, useRef } from 'react';
import { loadSdk } from '@facephi/sdk-loader';
import { Logger, LoggerType } from '@/utils/Logger';

export default function SdkLoaderComponent() {
	const sdkElementRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const initializeSdk = async () => {
			const apiKey = process.env.NEXT_PUBLIC_API_KEY || '';
			Logger.printLog(LoggerType.SDK_LOADER, 'Initializing SDK Loader...', '');

			// Load the SDK using the sdk-loader package
			// The sdk-loader will load @facephi/sdk-web-wc from CDN and create the facephi-sdk-provider element
			const sdkElement = await loadSdk({
				apiKey,
				containerId: 'sdk-container',
			});

			Logger.printLog(LoggerType.SDK_LOADER, 'SDK Element created:', sdkElement);

			if (sdkElement) {
				sdkElementRef.current = sdkElement as HTMLElement;

				// Listen for SDK events
				sdkElement.addEventListener('emitIDVIntegration', (event) => {
					Logger.printLog(LoggerType.SDK_LOADER, 'emitIDVIntegration:', event);
				});
			}
		};

		initializeSdk();
	}, []);

	return (
		<div className='sdk-loader-wrapper'>
			<div id='sdk-container' />
		</div>
	);
}
