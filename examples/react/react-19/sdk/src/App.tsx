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
import { Language, TypeFamily } from '@facephi/sdk-web-wc';
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
				<facephi-sdk-provider
					apiKey={licenseKey}
					steps='START,SELPHI_WIDGET,SELPHID_WIDGET,FINISH'
					type={TypeFamily.onboarding}
					customer-id='facephi-sdk-react19-example'
					language={Language.es}
					onemitData={handleEmitData}
					onemitError={handleEmitError}
				>
					{widget === 'selphi' && <SelphiComponent setWidget={setWidget} />}
					{widget === 'selphid' && <SelphIDComponent setWidget={setWidget} />}
					{widget === 'finish' && <div>The process has been completed</div>}
				</facephi-sdk-provider>
			</section>
		</main>
	);
}
