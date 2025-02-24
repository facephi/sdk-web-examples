import { useState } from 'react'
import SelphiComponent from './components/SelphiComponent'
import SelphIDComponent from './components/SelphIDComponent'

function App() {
  const [widget, setWidget] = useState('selphi');
  const licenseKey = import.meta.env.VITE_LICENSE_KEY || '';

  function handleEmitOperationId(event) {
	const result = event.detail;
	console.log('%c%s', 'color: lime;', `[PROVIDER] onEmitOperationId: ${result}`);
}

  return (
    <main>
        <section className="sdk-section">
			<facephi-sdk-provider 
				apiKey={licenseKey} 
				steps="START,SELPHI_WIDGET,SELPHID_WIDGET,FINISH"
				disabled
				debug={false}
				language="en"
				type="ONBOARDING"
				onemitOperationId={handleEmitOperationId}
			>
				
				{widget === 'selphi' && <SelphiComponent setWidget={setWidget} />}
				{widget === 'selphid' && <SelphIDComponent setWidget={setWidget} />}
				{widget === 'finish' && <div>The process has been completed</div>}	
				</facephi-sdk-provider> 
			</section>
		</main>
  )
}

export default App
