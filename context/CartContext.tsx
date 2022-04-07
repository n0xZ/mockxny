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
	//It returns the total price, based on the sum of the price of each product
	const getTotalPrice = () => {
		return Math.round(
			selectedProducts.reduce(
				(prevValue, currentValue) =>
					prevValue + currentValue.price,
				0
			)
		);
	};
	//It updates the payment states,such as client credit and its selected products
	const updatePaymentStates = () => {
		setClientCredit(clientCredit - getTotalPrice());
		setSelectedProducts([]);
	};
	//It performs the payment, which is based on the client credit and the total price: If the user's credit is lower
	//than the total price, it will redirect to '/cart/payment/error'. If not, it will redirect to /cart/payment/success
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
