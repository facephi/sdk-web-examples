import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<title>Facephi - SDK Next 15</title>
			</Head>
			<body>
				<header className='header'>
					<img src='/facephi_logo.svg' alt='Facephi logo' height='60' className='logo' />
				</header>

				<main className='main'>
					<section className='sdk-section'>
						<Main />
					</section>
				</main>

				<footer className='footer'>
					<div>
						<p>{new Date().getFullYear()} ©FacePhi. All rights reserved.</p>
					</div>
					<div className='framework'>
						<p>NextJS 15</p>
					</div>
				</footer>

				<NextScript />
			</body>
		</Html>
	);
}
