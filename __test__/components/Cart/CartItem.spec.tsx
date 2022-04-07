import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import CartItem from '../../../components/Cart/CartItem';
import { mockCartItem } from '../../../__mocks__/mocks';
describe('Cart Item component test case', () => {
	it('should render the Cart Item component without any trouble', () => {
		const { container } = render(
			<CartItem product={mockCartItem} productIndex={1} />
		);

		expect(container).toBeInTheDocument();
	});
	it('Displays the product title  based on the selected product', () => {
		render(
			<CartItem product={mockCartItem} productIndex={1} />
		);
		const text = screen.getByText(
			'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
		);
		expect(text).toBeInTheDocument();
	});
});
