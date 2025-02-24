import { Language } from '@facephi/sdk-web-wc';
import SelphiComponent from './components/SelphiComponent';
import SelphIDComponent from './components/SelphIDComponent';
import { useState } from 'react';

export default function App() {
	const licenseKey = (import.meta as any).env.VITE_LICENSE_KEY || '';
	const [widget, setWidget] = useState('selphi');

	function handleEmitOperationId(event: CustomEvent<string>) {
		const result = event.detail;
		console.log('%c%s', 'color: lime;', `[PROVIDER] onEmitOperationId: ${result}`);
	}

	return (
		<main>
			<section className='sdk-section'>
				<facephi-sdk-provider
					apiKey={licenseKey}
					disabled
					debug={false}
					language={Language.en}
					onemitOperationId={handleEmitOperationId}
				>
					{widget === 'selphi' && <SelphiComponent setWidget={setWidget} />}
					{widget === 'selphid' && <SelphIDComponent setWidget={setWidget} />}
					{widget === 'finish' && <div>The process has been completed</div>}
				</facephi-sdk-provider>
			</section>
		</main>
	);
}
