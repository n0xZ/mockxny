import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout';
import homeIllustration from '../public/home-illustration.svg';
import Button from '@/components/Button';
import Link from 'next/link';
const Home: NextPage = () => {
	return (
		<Layout>
			<Head>
				<title>Interview Challenge - Loudrop - Home</title>
				<meta
					name="description"
					content="Interview challenge de Loudrop, realizado por Gonzalo Molina"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section
				className="
			 container mx-auto mt-3 flex flex-col items-center justify-center"
			>
				<Image
					src={homeIllustration}
					width={600}
					height={600}
					alt="Ilustración de Interview-challenge Loudrop"
				/>
				<h2 className="text-3xl text-center mt-6 font-bold mb-2">
					{' '}
					Bienvenido a Interview-challenge Loudrop!
				</h2>
				<p className="mb-2 text-center">
					Este proyecto es una simulación de un carrito de
					compras, con las funciones de poder Agregar y eliminar
					productos
				</p>
				<p className="mb-4 text-center">
					A su vez, se podrá validar el carrito del usuario,
					acorde a los productos seleccionados, y el saldo
					específico del usuario
				</p>
				<Link href="/products">
					<a>
						<Button>Comenzar ya</Button>
					</a>
				</Link>
			</section>
		</Layout>
	);
};

export default Home;
