/**
 * Facephi SDK Provider Configuration Example
 *
 * WARNING:
 * This is an example of the implementation of the Web SDK Library.
 * All the properties, events and methods used in this examples are implemented as orientation to a better performance in coding.
 *
 * Please, consider to check the documentation before editing the code.
 *
 * We recommend to remove all the console logs and use actual code.
 *
 */
import { FacephiSdkProvider, Language, TypeFamily } from '@facephi/sdk-web-react';
import SelphiComponent from './components/SelphiComponent';
import SelphIDComponent from './components/SelphIDComponent';
import { useState } from 'react';
import { Logger, LoggerType } from './utils/Logger';

export default function App() {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const licenseKey = (import.meta as any).env.VITE_LICENSE_KEY || '';
	const [widget, setWidget] = useState('selphid');

	// Provider Events
	function handleEmitData(event: CustomEvent<{ operationId: string; sessionId: string; extraData: string }>) {
		const result = event.detail;
		Logger.printLog(LoggerType.SDK_PROVIDER, 'onEmitData', result);
	}

	function handleEmitError(event: CustomEvent<{ statusCode: number; message: string }>) {
		const result = event.detail;
		Logger.printLog(LoggerType.SDK_PROVIDER, 'onEmitError', result);
	}

	return (
		<main className='main'>
			<section className='sdk-section'>
				<FacephiSdkProvider
					apikey={licenseKey}
					steps='START,SELPHID_WIDGET,SELPHI_WIDGET,FINISH'
					type={TypeFamily.onboarding}
					customerId='facephi-sdk-react-react18-example'
					language={Language.es}
					onEmitError={handleEmitError}
					onEmitData={handleEmitData}
				>
					{widget === 'selphid' && <SelphIDComponent setWidget={setWidget} />}
					{widget === 'selphi' && <SelphiComponent setWidget={setWidget} />}
					{widget === 'finish' && <div className='onboarding-finished'>ONBOARDING FINISHED</div>}
				</FacephiSdkProvider>
			</section>
		</main>
	);
}
