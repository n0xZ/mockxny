import React from 'react';
interface Props {
	clientAmount: number;
}

const CartClientCredit = ({ clientAmount }: Props) => {
	return (
		<div className='h-20 flex flex-row container mx-auto mt-6"'>
			<aside className="flex flex-row justify-between items-center rounded-md w-full p-5 border-gray-50 border-2 mt-2 hover:opacity-90 duration-100 ease-in-out">
				<h2>Tu saldo</h2>
				<span className="flex flex-row">
					<p className="font-bold mx-2">$ {clientAmount}</p>
				</span>
			</aside>
		</div>
	);
};

export default CartClientCredit;
