import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<title>SDK Video Recruitment Example</title>
			</Head>
			<body>
				<header>
					<section className='header'>
						<a href='https://www.facephi.com/' title='FacePhi' target='https://facephi.com/'>
							<img src='/facephi_logo.svg' alt='Facephi logo' height='25' />
						</a>
					</section>
				</header>

				<main>
					<section className='sdk-section'>
						<Main />
					</section>
				</main>

				<footer>
					<section className='footer'>
						<div>
							<span id='copyright-year'>{new Date().getFullYear()}</span> ©FacePhi. All rights reserved.
						</div>

						<div className='framework'>NextJS 12</div>
					</section>
				</footer>
				<NextScript />
			</body>
		</Html>
	);
}
