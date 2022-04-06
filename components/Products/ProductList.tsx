import { FC } from 'react';
import { Product } from '../../types';
import ProductItem from './ProductItem';
interface ProductListProps {
	products: Product[];
}

const ProductList: FC<ProductListProps> = ({
	products,
}) => {
	return (
		<article className='grid grid-cols-5 container mx-auto mt-6'>
			
			{products.map((product) => (
				<ProductItem product={product} key={product.id} />
			))}
		</article>
	);
};

export default ProductList;
