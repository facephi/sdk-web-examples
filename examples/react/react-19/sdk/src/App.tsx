import { Language, TypeFamily } from '@facephi/sdk-web-wc';
import SelphiComponent from './components/SelphiComponent';
import SelphIDComponent from './components/SelphIDComponent';
import { useState } from 'react';

export default function App() {
	const licenseKey = (import.meta as any).env.VITE_LICENSE_KEY || '';
	const [widget, setWidget] = useState('selphi');

	// Provider Events
	function handleEmitData(event: CustomEvent<{ operationId: string; sessionId: string; extraData: string; }>) {
		const result = event.detail;
		console.log(
			'%c%s',
			'color: lime;',
			`[PROVIDER] emitData: operationId(${result.operationId}), sessionId(${result.sessionId}), extraData(${result.extraData})`,
		);
	}

	function handleEmitError(event: CustomEvent<{ statusCode: number; message: string }>) {
		const result = event.detail;
		console.log('%c%s', 'color: lime;', `[PROVIDER] onEmitError: ${result.message} (${result.statusCode})`);
	}

	return (
		<main>
			<section className='sdk-section'>
				<facephi-sdk-provider
					apiKey={licenseKey}
					steps="START,SELPHI_WIDGET,SELPHID_WIDGET,FINISH"
					type={TypeFamily.onboarding}
					customerId='facephi-sdk-react19-example'
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
