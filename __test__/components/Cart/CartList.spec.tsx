import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CartList from '@/components/Cart/CartList';
import {
	mockDefaultValues,
	mockedSelectedProductValues,
} from '@/__mocks__/context';
import { CartProvider } from '@/context/CartContext';
describe('Cart list component test case', () => {
	it('Renders the component without any trouble', () => {
		const { container } = render(<CartList />);

		expect(container).toBeInTheDocument();
	});
	it(`Displays the empty cart component if there aren't any selected products`, () => {
		render(
			<CartProvider.Provider value={mockDefaultValues}>
				<CartList />
			</CartProvider.Provider>
		);
		const text = screen.getByText('Su carrito está vacío');
		expect(text).toBeInTheDocument();
	});
	it(`Displays the cart list component with its selected products`, () => {
		const { container } = render(
			<CartProvider.Provider
				value={mockedSelectedProductValues}
			>
				<CartList />
			</CartProvider.Provider>
		);
		const text = screen.getByText(`John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet`);
		expect(text).toBeInTheDocument()
		expect(container).toMatchSnapshot();
	});
});
