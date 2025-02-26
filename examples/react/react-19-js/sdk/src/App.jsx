import { useEffect, useRef, useState } from 'react';
import SelphiComponent from './components/SelphiComponent';
import SelphIDComponent from './components/SelphIDComponent';
import './app.css';

export default function App() {
	//Demo
	const widgets = ['selphi', 'selphid']; // Widgets: 'selphid', 'selphi'
	const [widget, setWidget] = useState(widgets[0]);
	const [current, setCurrent] = useState(0);
	const apiKey = import.meta.env.VITE_LICENSE_KEY;

	//Provider
	const providerRef = useRef(null);
	const provider = {
		apiKey: apiKey, // TODO Required license
		steps: 'START,SELPHI_WIDGET,SELPHID_WIDGET,FINISH', // Order in platform
		type: 'ONBOARDING', // ONBOARDING or AUTHENTICATION
		customerId: 'react19-js-sdk', // Unique user id
		language: 'es', // Main language in sdk and widgets
		disabled: false, //Disable tracking
	};

	useEffect(() => {
		// Widget configuration
		providerRef.current.setAttribute('apikey', provider.apiKey);
		providerRef.current.setAttribute('steps', provider.steps);
		providerRef.current.setAttribute('type', provider.type);
		providerRef.current.setAttribute('customer-id', provider.customerId);
		providerRef.current.setAttribute('language', provider.language);
		providerRef.current.setAttribute('disabled', provider.disabled);

		// Provider events subscriptions
		providerRef.current.addEventListener('emitData', onEmitData);
		providerRef.current.addEventListener('emitError', onEmitError);

	}, []);

	//#region Demo functions
	function handleEvent(type) {
		//Update widget
		if (type === 'ExtractionFinish') {
			const index = current + 1;
			setCurrent(index);
			if (index >= widgets.length) {
				setWidget('finish');
			} else {
				setWidget(widgets[index]);
			}
		}
	}

	function onWidgetEvent(event) {
		handleEvent(event.type);
	}
	//#endregion

	//#region Provider Event Handlers
	function onEmitData(event) {
		const result = event.detail;
		console.warn('[PROVIDER] EmitData:', result);
	}
	function onEmitError(event) {
		const result = event.detail;
		console.warn('[PROVIDER] EmitError:', result);
	}
	//#endregion

	return (
		<main>
			<div className='title'>
			</div>

			<section className='sdk-section'>
				{/* SDK Provider */}
				<facephi-sdk-provider ref={providerRef}>
					{/* Selphi Component */}
					{widget === 'selphi' && <SelphiComponent widgetEvent={onWidgetEvent} />}

					{/* SelphID Component */}
					{widget === 'selphid' && <SelphIDComponent widgetEvent={onWidgetEvent} />}

					{/* Finish Component */}
					{widget === 'finish' && <div>Process complete</div>}
				</facephi-sdk-provider>
			</section>
		</main>
	);
}
