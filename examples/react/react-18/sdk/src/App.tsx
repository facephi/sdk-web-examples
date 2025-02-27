
import { FacephiSdkProvider, Language, TypeFamily } from '@facephi/sdk-web-react';
import SelphiComponent from './components/SelphiComponent';
import SelphIDComponent from './components/SelphIDComponent';
import { useState } from 'react';

export default function App() {
	const licenseKey = (import.meta as any).env.VITE_LICENSE_KEY || '';
  const [widget, setWidget] = useState('selphi');

	// Provider Events
  function handleEmitError(event: CustomEvent<{ statusCode: number; message: string }>) {
		const result = event.detail;
		console.log('%c%s', 'color: lime;', `[PROVIDER] onEmitError: ${result.message} (${result.statusCode})`);
	}

  function handleEmitData(event: CustomEvent<{ operationId: string; sessionId: string; extraData: string; }>) {
		const result = event.detail;
		console.log(
			'%c%s',
			'color: lime;',
			`[PROVIDER] emitData: operationId(${result.operationId}), sessionId(${result.sessionId}), extraData(${result.extraData})`,
		);
	}
  
	return (
		<main>
        <section className="sdk-section">
          <FacephiSdkProvider
            apikey={licenseKey}
            steps="START,SELPHI_WIDGET,SELPHID_WIDGET,FINISH"
            type={TypeFamily.onboarding}
            customerId='facephi-sdk-react18-example'
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
