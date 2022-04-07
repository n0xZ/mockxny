import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { mockList } from '@/__mocks__/mocks';
import ProductList from '@/components/Products/ProductList';
import { CartContext } from '@/context/CartContext';
describe('Product list component test case', () => {
	it('Renders the component without any trouble', () => {
		const { container } = render(
			<CartContext>
				<ProductList products={mockList} />
			</CartContext>
		);
		expect(container).toBeInTheDocument();
	});
	it('Displays the product items component based on the mock list', () => {
		const { container } = render(
			<ProductList products={mockList} />
		);
		expect(container).toMatchSnapshot();
	});
});
