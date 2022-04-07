import React from 'react';
import { useCard } from '../../context/CartContext';
import Button from '../Button';
import CardItem from './CartItem';
import EmptyCart from './EmptyCart';
import CartClientCredit from './CartClientCredit';
import CartFinalPrice from './CartFinalPrice';
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
					<div className=' flex flex-col container mx-auto mt-6"'>
						{selectedProducts.map((product, index) => (
							<CardItem product={product} productIndex={index} key={index} />
						))}
					</div>

					<div className="mt-4 flex flex-col">
						<CartFinalPrice finalPrice={getTotalPrice()} />
						<CartClientCredit clientAmount={clientCredit} />
						<div className=" mt-3 container mx-auto flex flex-row justify-end w-full  items-end">
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
