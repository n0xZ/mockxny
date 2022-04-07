import {
	createContext,
	FC,
	useContext,
	useState,
} from 'react';
import { useRouter } from 'next/router';
import { CartContextI, Product } from '../types';
import { toast } from 'react-hot-toast';
// Cart provider initialized, with its values based on the CartContextI interface
export const CartProvider = createContext<CartContextI>({
	clientCredit: 0,
	selectedProducts: [],
	addSelectedProduct: () => {},
	removeSelectedProduct: () => {},
	updatePaymentStates: () => {},
	getTotalPrice: () => 0,
	performPayment: () => {},
});

export const CartContext: FC = ({ children }) => {
	const router = useRouter();

	const [clientCredit, setClientCredit] = useState(1000);
	const [selectedProducts, setSelectedProducts] = useState<
		Product[]
	>([]);
	const addSelectedProduct = (product: Product) => {
		toast.success('Producto agregado al carrito');
		setSelectedProducts([...selectedProducts, product]);
	};
	const removeSelectedProduct = (index: number) => {
		setSelectedProducts(
			selectedProducts.filter((p, ind) => ind !== index)
		);
	};
	const getTotalPrice = () => {
		return Math.round(
			selectedProducts.reduce(
				(prevValue, currentValue) =>
					prevValue + currentValue.price,
				0
			)
		);
	};
	const updatePaymentStates = () => {
		setClientCredit(clientCredit - getTotalPrice());
		setSelectedProducts([]);
	};
	const performPayment = () => {
		if (getTotalPrice() < clientCredit) {
			router.push('/cart/payment/successful');
		} else {
			router.push('/cart/payment/error');
		}
	};
	return (
		<CartProvider.Provider
			value={{
				clientCredit,
				selectedProducts,
				addSelectedProduct,
				updatePaymentStates,
				removeSelectedProduct,
				getTotalPrice,
				performPayment,
			}}
		>
			{children}
		</CartProvider.Provider>
	);
};

export const useCard = () => useContext(CartProvider);
