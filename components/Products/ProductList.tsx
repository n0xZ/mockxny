import { FC } from 'react';
import { Product } from 'types';
import ProductItem from './ProductItem';
interface ProductListProps {
	products: Product[];
}

const ProductList: FC<ProductListProps> = ({
	products,
}) => {
	return (
		<article className='grid xl:grid-cols-4 grid-cols-2 container mx-auto mt-6'>
			
			{products.map((product) => (
				<ProductItem product={product} key={product.id} />
			))}
		</article>
	);
};

export default ProductList;
