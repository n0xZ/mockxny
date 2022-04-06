import Image from 'next/image';
import { FC } from 'react';
import { Product } from '../types';
interface ProductItemProps {
	product: Product;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
	return (
		<aside key={product.id}>
			<Image
				src={product.image}
				width={100}
				height={100}
				alt={product.title}
			/>
			<p className='font-bold '>{product.title}</p>
			<p>{}</p>
		</aside>
	);
};

export default ProductItem;
