import { CartContextI } from 'types';
import { mockList } from './mocks';
export const mockDefaultValues: CartContextI = {
	clientCredit: 0,
	selectedProducts: [],
	addSelectedProduct: () => {},
	getTotalPrice: () => 0,
	updatePaymentStates: () => {},
	performPayment: () => {},
	removeSelectedProduct: () => {},
};

export const mockedSelectedProductValues: CartContextI = {
	clientCredit: 0,
	selectedProducts: mockList,
	addSelectedProduct: () => {},
	getTotalPrice: () => 0,
	updatePaymentStates: () => {},
	performPayment: () => {},
	removeSelectedProduct: () => {},
};
