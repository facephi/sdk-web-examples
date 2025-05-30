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

// Using dynamic imports for SDK components to prevent SSR issues in Next.js 12
const SdkProvider = dynamic(() => import('../components/Provider-component/SDKProvider.component'), { ssr: false });
const VideoRecruitment = dynamic(() => import('../components/VideoRecruitment-component/VideoRecruitment.component'), {
	ssr: false,
});

const Home: NextPage = () => {
	return (
		<SdkProvider>
			<VideoRecruitment />
		</SdkProvider>
	);
};

export default Home;
