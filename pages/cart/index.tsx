import React from 'react';
import Layout from '../../components/Layout';
import CardList from '../../components/Cart/CartList';
import Head from 'next/head';
const CartPage = () => {
	return (
		<Layout>
			<Head>
				<title>Mockxny - Mi carrito</title>
				<meta
					name="description"
					content="Mi carrito de compras actual"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<CardList />
		</Layout>
	);
};

export default CartPage;
