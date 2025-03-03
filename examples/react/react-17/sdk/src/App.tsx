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

export default function App() {
	const licenseKey = (import.meta as any).env.VITE_LICENSE_KEY || '';
	const [widget, setWidget] = useState('selphi');

	// Provider Events
	function handleEmitData(event: CustomEvent<{ operationId: string; sessionId: string; extraData: string }>) {
		const result = event.detail;
		console.log(
			'%c%s%s\n%s\n%s\n%s',
			'color: #00FF00;',
			'[PROVIDER] onEmitData:',
			'',
			`operationId: ${result.operationId}`,
			`sessionId: ${result.sessionId}`,
			`extraData: ${result.extraData}`,
		);
	}

	function handleEmitError(event: CustomEvent<{ statusCode: number; message: string }>) {
		const result = event.detail;
		console.log(
			'%c%s%s\n%s',
			'color: #00FF00;',
			'[PROVIDER] onEmitError:',
			'',
			`statusCode: ${result.statusCode}`,
			`message: ${result.message}`,
		);
	}

	return (
		<main>
			<section className='sdk-section'>
				<FacephiSdkProvider
					apikey={licenseKey}
					steps='START,SELPHI_WIDGET,SELPHID_WIDGET,FINISH'
					type={TypeFamily.onboarding}
					customerId='facephi-sdk-react17-example'
					language={Language.es}
					onEmitError={handleEmitError}
					onEmitData={handleEmitData}
				>
					{widget === 'selphi' && <SelphiComponent setWidget={setWidget} />}
					{widget === 'selphid' && <SelphIDComponent setWidget={setWidget} />}
					{widget === 'finish' && <div>The process has been completed</div>}
				</FacephiSdkProvider>
			</section>
		</main>
	);
}
