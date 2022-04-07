import { Category, Product } from 'types';
export const mockCartItem: Product = {
	id: 1,
	title:
		'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
	price: 109.95,
	description:
		'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
	category: Category.MenSClothing,
	image:
		'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
	rating: {
		rate: 3.9,
		count: 120,
	},
};

export const mockSemiEmptyList: Product[] = [
	{
		id: 4,
		title: 'Mens Casual Slim Fit',
		price: 15.99,
		description:
			'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
		category: Category.MenSClothing,
		image:
			'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
		rating: {
			rate: 2.1,
			count: 430,
		},
	},
];
export const mockList: Product[] = [
	{
		id: 4,
		title: 'Mens Casual Slim Fit',
		price: 15.99,
		description:
			'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
		category: Category.MenSClothing,
		image:
			'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
		rating: {
			rate: 2.1,
			count: 430,
		},
	},
	{
		id: 5,
		title:
			"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
		price: 695,
		description:
			"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
		category: Category.Jewelery,
		image:
			'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
		rating: {
			rate: 4.6,
			count: 400,
		},
	},
	{
		id: 6,
		title: 'Solid Gold Petite Micropave ',
		price: 168,
		description:
			'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
		category: Category.Jewelery,
		image:
			'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
		rating: {
			rate: 3.9,
			count: 70,
		},
	},
	{
		id: 7,
		title: 'White Gold Plated Princess',
		price: 9.99,
		description:
			"Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
		category: Category.Jewelery,
		image:
			'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
		rating: {
			rate: 3,
			count: 400,
		},
	},
	{
		id: 8,
		title:
			'Pierced Owl Rose Gold Plated Stainless Steel Double',
		price: 10.99,
		description:
			'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
		category: Category.Jewelery,
		image:
			'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
		rating: {
			rate: 1.9,
			count: 100,
		},
	},
];
