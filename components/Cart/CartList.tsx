import React from 'react';
import { useCard } from '../../context/CartContext';
import Button from '../Button';
import CardItem from './CartItem';
import EmptyCart from './EmptyCart';
import CartClientCredit from './CartClientCredit';
import CartFinalPrice from './CartFinalPrice';
import Link from 'next/link';
const CartList = () => {
	const {
		selectedProducts,
		clientCredit,
		getTotalPrice,
		performPayment,
	} = useCard();
	return (
		<>
			{selectedProducts.length === 0 ? (
				<EmptyCart />
			) : (
				<article className="flex flex-col justify-between p-2">
					<h2 className="text-center text-3xl  mt-2 font-bold mb-2">
						Mis productos
					</h2>
					<div className='flex flex-col container mx-auto mt-6"'>
						{selectedProducts.map((product, index) => (
							<CardItem
								product={product}
								productIndex={index}
								key={index}
							/>
						))}
					</div>

					<div className="mt-4 flex flex-col">
						<CartFinalPrice finalPrice={getTotalPrice()} />
						<CartClientCredit clientAmount={clientCredit} />
						<div className=" mt-3 container mx-auto flex flex-row justify-between w-full  items-end">
							<Link href="/products">
								<a>Volver atrás</a>
							</Link>
							<Button onClick={() => performPayment()}>
								Realizar compra
							</Button>
						</div>
					</div>
				</article>
			)}
		</>
	);
};

export default CartList;
