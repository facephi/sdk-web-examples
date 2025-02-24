
import { FacephiSdkProvider, Language, TypeFamily } from '@facephi/sdk-web-react';
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
        <section className="sdk-section">
          <FacephiSdkProvider
            apikey={licenseKey}
            steps="START,SELPHI_WIDGET,SELPHID_WIDGET,FINISH"
            onEmitOperationId={handleEmitOperationId}
            disabled
            className="facephi-sdk-provider"
            language={Language.en}
            type={TypeFamily.onboarding}
            theme={{
              fontName: 'Poppins',
              logo: '',
              primaryColor: 'pink',
              secondaryColor: 'blue',
              tertiaryColor: 'orange',
              backgroundColor: 'white',
            }}
          >
            {widget === 'selphi' && <SelphiComponent setWidget={setWidget} />}
            {widget === 'selphid' && <SelphIDComponent setWidget={setWidget} />}
            {widget === 'finish' && <div>The process has been completed</div>}
          </FacephiSdkProvider>
        </section>
		</main>
	);
}
