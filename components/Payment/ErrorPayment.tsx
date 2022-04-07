import React from 'react';
import Link from 'next/link';
import Layout from '../Layout';

const ErrorPayment = () => {
	return (
		<Layout>
			<h2>
				Hubo un error al realizar su pago. Por favor, revise si
				su credito es menor al precio total.
			</h2>
			<Link href="/products">
				<a>Volver atrás</a>
			</Link>
		</Layout>
	);
};

export default ErrorPayment;
