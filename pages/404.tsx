import Image from 'next/image';
import Head from 'next/head';
import Layout from '../components/Layout';
import Error404Illustration from '@/public/404-illustration.svg';
const Error404 = () => {
	return (
		<Layout>
			<Head>
				<title>Interview Challenge - Loudrop - Error</title>
				<meta
					name="description"
					content="Página no encontrada"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section className="container mx-auto mt-3 flex flex-col items-center justify-center">
				<Image
					src={Error404Illustration}
					alt="Sketchy image"
					width={600}
					height={600}
				/>
				<h2 className="text-3xl text-center mt-6 font-bold mb-2">
					Oops! Al parecer esta página no existe. 😢
				</h2>
			</section>
		</Layout>
	);
};

export default Error404;
