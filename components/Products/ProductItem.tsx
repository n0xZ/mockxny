import { FC } from 'react';
import Image from 'next/image';
import { useCard } from '../../context/CartContext';
import { Product } from '../../types';
interface ProductItemProps {
	product: Product;
}
const ProductItem: FC<ProductItemProps> = ({ product }) => {
	const { addSelectedProduct } = useCard();
	return (
		<aside
			key={product.id}
			className="flex flex-col justify-between p-3"
		>
			<span className='flex flex-col'>
				<Image
					src={product.image}
					className="object-fill"
					width={100}
					height={250}
					alt={product.title}
				/>
				<p className="font-bold mb-2">{product.title}</p>
				<p className="mb-2">{}</p>
			</span>
			<button
				className="px-6 py-4 border-2 border-emerald-500 text-bold"
				onClick={() => addSelectedProduct(product)}
			>
				Agregar al carrito
			</button>
		</aside>
	);
};

export default ProductItem;
