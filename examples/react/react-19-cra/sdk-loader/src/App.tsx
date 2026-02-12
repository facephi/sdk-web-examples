import { useEffect } from 'react';
import { loadSdk } from '@facephi/sdk-loader';
import { Logger, LoggerType } from './utils/Logger';

function App() {
	useEffect(() => {
		const initializeSdk = async () => {
			const apiKey = process.env.REACT_APP_API_KEY || '';

			Logger.printLog(LoggerType.SDK_LOADER, 'Initializing SDK Loader...', '');

			// Load the SDK using the sdk-loader package
			// The sdk-loader will load @facephi/sdk-web-wc from CDN and create the facephi-sdk-provider element
			const sdkElement = await loadSdk({
				apiKey,
				containerId: 'sdk-container',
			});

			Logger.printLog(LoggerType.SDK_LOADER, 'SDK Element created:', sdkElement);

			if (sdkElement) {

				// Listen for SDK events
				sdkElement.addEventListener('emitIDVIntegration', (event) => {
					Logger.printLog(LoggerType.SDK_LOADER, 'emitIDVIntegration:', event);
				});
			}
		};

		initializeSdk();
	}, []);

	return (
		<main className='main'>
			<section className='sdk-section'>
				<div id='sdk-container' />
			</section>
		</main>
	);
}

export default App;
