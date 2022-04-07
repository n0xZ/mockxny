import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import Layout from '../Layout';

import { useCard } from '@/context/CartContext';
import paymentSucessful from '@/public/payment-successful.svg';
const SucessPayment = () => {
	const { selectedProducts, updatePaymentStates } =
		useCard();
	useEffect(() => {
		selectedProducts.length !== 0 && updatePaymentStates();
	}, []);
	return (
		<Layout>
			<section className="container mx-auto flex flex-col items-center justify-center">
				<Image
					src={paymentSucessful}
					alt="Sketchy image"
					width={600}
					height={600}
				/>
				<h2 className="text-3xl font-bold mb-2">
					El pago ha sido exitoso!
				</h2>
				<Link href="/products">
					<a className="text-xl p-2 border-2 border-gray-50 rounded-lg">
						Volver atrás
					</a>
				</Link>
			</section>
		</Layout>
	);
};

export default SucessPayment;
