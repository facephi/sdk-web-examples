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
import SelphiComponent from './components/SelphiComponent';
import SelphIDComponent from './components/SelphIDComponent';
import { useState } from 'react';
import { Logger, LoggerType } from './utils/Logger';

export default function App() {
	const licenseKey = import.meta.env.VITE_LICENSE_KEY || '';
	const [widget, setWidget] = useState('selphid');

	// Provider Events
	function handleEmitData(event) {
		const result = event.detail;
		Logger.printLog(LoggerType.SDK_PROVIDER, 'onEmitData', result);
	}

	function handleEmitError(event) {
		const result = event.detail;
		Logger.printLog(LoggerType.SDK_PROVIDER, 'onEmitError', result);
	}

	return (
		<main className='main'>
			<section className='sdk-section'>
				<facephi-sdk-provider
					apiKey={licenseKey}
					steps='START,SELPHID_WIDGET,SELPHI_WIDGET,FINISH'
					type='ONBOARDING'
					customer-id='facephi-sdk-react19js-example'
					language='es'
					onemitData={handleEmitData}
					onemitError={handleEmitError}
				>
					{widget === 'selphid' && <SelphIDComponent setWidget={setWidget} />}
					{widget === 'selphi' && <SelphiComponent setWidget={setWidget} />}
					{widget === 'finish' && <div className='onboarding-finished'>ONBOARDING FINISHED</div>}
				</facephi-sdk-provider>
			</section>
		</main>
	);
}
