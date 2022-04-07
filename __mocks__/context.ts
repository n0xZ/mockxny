import { CartContextI } from 'types';
import { mockCardList } from './mocks';
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
	selectedProducts: mockCardList,
	addSelectedProduct: () => {},
	getTotalPrice: () => 0,
	updatePaymentStates: () => {},
	performPayment: () => {},
	removeSelectedProduct: () => {},
};
