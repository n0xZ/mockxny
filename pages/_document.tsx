import {
	Head,
	Html,
	Main,
	NextScript,
} from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Roboto:wght@300&family=Source+Sans+Pro:wght@300&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body className='w-full min-h-screen font-sourceSansPro'>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
