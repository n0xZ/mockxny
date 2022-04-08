import type {
	GetStaticProps,
	InferGetStaticPropsType,
	NextPage,
} from 'next';
import Head from 'next/head';
import Layout from '../../components/Layout';
import ProductList from '../../components/Products/ProductList';
import { products } from '../../products';

const ProductsLage: NextPage = ({
	products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<Layout>
			<Head>
				<title>Mockxny - Productos</title>
				<meta
					name="description"
					content="Lista de productos actuales"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h2 className="text-center text-3xl  mt-2 font-bold mb-2">
				Lista de productos
			</h2>
			<ProductList products={products} />
		</Layout>
	);
};

export default ProductsLage;

export const getStaticProps: GetStaticProps = async () => {
	const productsResponse = await products.lists();
	if (!productsResponse)
		return {
			redirect: { destination: '/error', permanent: false },
		};
	return {
		props: {
			products: productsResponse,
		},
	};
};
