import { NextPage } from 'next';
import Head from 'next/head';

import SucessPayment from '../../../components/Payment/SucessPayment';

const PaymentSuccessfulPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Mockxny - Pago realizado</title>
				<meta
					name="description"
					content="Interview challenge de Loudrop, realizado por Gonzalo Molina"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<SucessPayment />{' '}
		</>
	);
};

export default PaymentSuccessfulPage;
