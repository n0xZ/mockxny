import Image from 'next/image';
import React from 'react';
import Layout from '../components/Layout';
import Error404Illustration from '@/public/404-illustration.svg';
const Error404 = () => {
	return (
		<Layout>
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
