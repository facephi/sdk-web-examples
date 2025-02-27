import SelphiComponent from './components/SelphiComponent';
import SelphIDComponent from './components/SelphIDComponent';
import { useState } from 'react';

export default function App() {
	const licenseKey = import.meta.env.VITE_LICENSE_KEY || '';
	const [widget, setWidget] = useState('selphi');

  // Provider Events
  function handleEmitError(event) {
	const result = event.detail;
	console.log('%c%s', 'color: lime;', `[PROVIDER] onEmitError: ${result?.message} (${result?.statusCode})`);
  }
	
	function handleEmitData(event) {
		const result = event.detail;
		console.log(
			'%c%s',
			'color: lime;',
			`[PROVIDER] emitData: operationId(${result.operationId}), sessionId(${result.sessionId}), extraData(${result.extraData})`,
		);
	}

  return (
    <main>
        <section className='sdk-section'>
			<facephi-sdk-provider 
				apiKey={licenseKey}
				steps="START,SELPHI_WIDGET,SELPHID_WIDGET,FINISH"
				type="ONBOARDING"
				customerId='facephi-sdk-react19js-example'
				language="es"
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
