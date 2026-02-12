'use client';

import dynamic from 'next/dynamic';

// Using dynamic imports for SDK Loader component to prevent SSR issues in Next.js 16
const SdkLoaderComponent = dynamic(() => import('@/components/SdkLoader-component/SdkLoader.component'), { ssr: false });

export default function Home() {
	return <SdkLoaderComponent />;
}
