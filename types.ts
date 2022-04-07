export interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: Category;
	image: string;
	rating: Rating;
}

export enum Category {
	Electronics = 'electronics',
	Jewelery = 'jewelery',
	MenSClothing = "men's clothing",
	WomenSClothing = "women's clothing",
}

export interface Rating {
	rate: number;
	count: number;
}

export type CartContextI = {
	clientCredit: number;
	selectedProducts: Product[];
	addSelectedProduct: (product: Product) => void;
	removeSelectedProduct: (index: number) => void;
	updatePaymentStates: () => void;
	getTotalPrice: () => number;
	performPayment: () => void;
};
