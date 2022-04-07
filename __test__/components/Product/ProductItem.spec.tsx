import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { mockCartItem } from '@/__mocks__/mocks';
import ProductItem from '@/components/Products/ProductItem';
describe('Product item component test case', () => {
	it('Renders the component without any trouble', () => {
		const { container } = render(
			<ProductItem product={mockCartItem} />
		);
		expect(container).toBeInTheDocument();
	});
	it('Displays the product item data based on the mock item', () => {
		const { container } = render(
			<ProductItem product={mockCartItem} />
		);
		expect(container).toMatchSnapshot();
	});
});
