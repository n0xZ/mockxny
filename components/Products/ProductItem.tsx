import { FC } from 'react';
import Image from 'next/image';
import { useCard } from '@/context/CartContext';
import { Product } from 'types';
import Button from '../Button';
interface ProductItemProps {
	product: Product;
}
const ProductItem: FC<ProductItemProps> = ({ product }) => {
	const { addSelectedProduct } = useCard();
	return (
		<aside
			key={product.id}
			className="flex flex-col justify-between p-3  hover:opacity-80 duration-100 ease-in-out"
		>
			<span className="flex flex-col">
				<Image
					priority={true}
					src={product.image}
					className="object-contain"
					width={100}
					height={200}
					alt={product.title}
				/>
				<p className="font-bold mb-2">{product.title}</p>
			</span>
			<div className="w-full">
				<p className="mb-3 text-gray-400 text-base relative">{`$ ${product.price}`}</p>
				<Button className='w-full' onClick={() => addSelectedProduct(product)}>
					Agregar al carrito
				</Button>
			</div>
		</aside>
	);
};

export default ProductItem;
