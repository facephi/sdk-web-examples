import type { Metadata } from 'next';
import '../styles/next.css';

export const metadata: Metadata = {
	title: 'Facephi - SDK Next 15',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<header className='header'>
					<img src='/facephi_logo.svg' alt='Facephi logo' height='60' className='logo' />
				</header>
				<main className='main'>
					<section className='sdk-section'>{children}</section>
				</main>
				<footer className='footer'>
					<div>
						<p>{new Date().getFullYear()} ©FacePhi. All rights reserved.</p>
					</div>
					<div className='framework'>
						<p>NextJS 15</p>
					</div>
				</footer>
			</body>
		</html>
	);
}
