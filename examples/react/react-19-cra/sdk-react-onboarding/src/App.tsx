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

import { useState } from 'react';
import { ErrorData, FacephiSdkProvider, Language, TypeFamily } from '@facephi/sdk-web-react';
import SelphiComponent from './components/SelphiComponent';
import SelphIDComponent from './components/SelphIDComponent';
import { Logger, LoggerType } from './utils/Logger';

function App() {
	const apiKey = process.env.REACT_APP_LICENSE_KEY;
	const [widget, setWidget] = useState('selphid');

	// Provider Events
	function handleEmitData(event: CustomEvent<{ operationId: string; sessionId: string; extraData: string }>) {
		const result = event.detail;
		Logger.printLog(LoggerType.SDK_PROVIDER, 'onEmitData', result);
	}

	function handleEmitError(event: CustomEvent<ErrorData>) {
		const result = event.detail;
		Logger.printLog(LoggerType.SDK_PROVIDER, 'onEmitError', result);
	}

	return (
		<main>
			<section className='sdk-section'>
				<FacephiSdkProvider
					apikey={apiKey}
					steps='START,SELPHID_WIDGET,SELPHI_WIDGET,FINISH'
					type={TypeFamily.onboarding}
					customer-id='facephi-sdk-react-react19-cra-example'
					language={Language.es}
					onEmitData={handleEmitData}
					onEmitError={handleEmitError}
				>
					{widget === 'selphid' && <SelphIDComponent setWidget={setWidget} />}
					{widget === 'selphi' && <SelphiComponent setWidget={setWidget} />}
					{widget === 'finish' && <div className='onboarding-finished'>ONBOARDING FINISHED</div>}
				</FacephiSdkProvider>
			</section>
		</main>
	);
}

export default App;
