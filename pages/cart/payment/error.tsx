import { NextPage } from 'next';
import React from 'react';
import ErrorPayment from '@/components/Payment/ErrorPayment';
import Head from 'next/head';

const PaymentErrorPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Mockxny - Error al realizar el pago</title>
				<meta
					name="description"
					content="Hubo un error al realizar el pago, intente nuevamente"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ErrorPayment />
		</>
	);
};

export default PaymentErrorPage;
