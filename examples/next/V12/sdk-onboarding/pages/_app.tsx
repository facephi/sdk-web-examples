import '../styles/styles.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div id='app'>
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
