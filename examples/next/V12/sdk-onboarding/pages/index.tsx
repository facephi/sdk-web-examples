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

import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useState } from 'react';

// Using dynamic imports for SDK components to prevent SSR issues in Next.js 12
const SdkProvider = dynamic(() => import('../components/Provider-component/SDKProvider.component'), { ssr: false });
const Selphi = dynamic(() => import('../components/Selphi-component/Selphi.component'), { ssr: false });
const Selphid = dynamic(() => import('../components/SelphId-component/Selphid.component'), { ssr: false });

const Home: NextPage = () => {
	const [currentStep, setCurrentStep] = useState<'selphi' | 'selphid' | 'completed'>('selphid');
	const handleSelphiComplete = () => {
		setCurrentStep('completed');
	};

	const handleSelphidComplete = () => {
		setCurrentStep('selphi');
	};

	return (
		<SdkProvider>
			{currentStep === 'selphid' && <Selphid onComplete={handleSelphidComplete} />}
			{currentStep === 'selphi' && <Selphi onComplete={handleSelphiComplete} />}
			{currentStep === 'completed' && <div>The process has been completed</div>}
		</SdkProvider>
	);
};

export default Home;
