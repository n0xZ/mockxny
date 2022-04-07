import Image from 'next/image';
import { FC } from 'react';
import { Product } from 'types';
import Button from '../Button';
import { useCard } from '../../context/CartContext';
interface Props {
	product: Product;
	productIndex: number;
}
const CartItem: FC<Props> = ({ product,productIndex }) => {
	const { removeSelectedProduct } = useCard();
	return (
		<aside
			key={product.id}
			className="flex flex-row justify-between items-center rounded-md w-full p-5 border-gray-50 border-2 mt-2 hover:opacity-90 duration-100 ease-in-out"
		>
			<div className="flex flex-row items-center">
				<Image
					src={product.image}
					className="object-contain "
					width={50}
					height={50}
					alt={product.title}
				/>
				<p className="font-bold mx-2 text-sm">
					{product.title}
				</p>
			</div>

			<div className="flex flex-row items-center">
				<p className="mx-2 text-sm">{`$ ${product.price}`}</p>
				<button
					onClick={() => removeSelectedProduct(productIndex)}
					className="border-2 font-lato  font-bold border-black rounded-md px-2 hover:border-2 hover:bg-gray-200  duration-100 ease-in"
				>
					X
				</button>
			</div>
		</aside>
	);
};

export default CartItem;
