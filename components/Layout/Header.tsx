import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useCard } from '@/context/CartContext';
import shoppingCart from '@/public/shopping-cart.svg';
import { useRouter } from 'next/router';
const PrivateNav = () => {
	const { selectedProducts } = useCard();
	return (
		<header className="p-4 border-gray-50 border-b-2 text-xl font-bold ">
			<nav className="flex flex-row justify-between items-center container mx-auto ">
				<h1>
					<Link href="/products">
						<a className="border-b-0 hover:border-b-2 hover:border-gray-300 duration-100 ease-in-out">
							Productos
						</a>
					</Link>
				</h1>
				<ul className="flex flex-row items-center">
					<li className="mx-2">
						<Link href="/cart">
							<a className="flex flex-row mx-2">
								<Image
									src={shoppingCart}
									className="ml-2"
									width={30}
									height={20}
									alt="Shopping cart "
									aria-label="Shopping cart icon"
								/>
								<span className="ml-1">Carrito</span>
								<span className="mx-2">
									({selectedProducts.length})
								</span>
							</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

const PublicNav = () => {
	return (
		<header className="p-4 border-gray-50 border-b-2 text-xl font-bold ">
			<nav className="flex flex-row justify-between items-center container mx-auto ">
				<h1>
					<Link href="/">
						<a className="border-b-0 hover:border-b-2 hover:border-gray-300 duration-100 ease-in-out">
							Home
						</a>
					</Link>
				</h1>
				<ul className="flex flex-row items-center">
					<li className="mx-2">
						<Link href="/products">
							<a className="flex flex-row mx-2">Productos</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

const Header = () => {
	const { pathname } = useRouter();
	return (
		<>{pathname === '/' ? <PublicNav /> : <PrivateNav />}</>
	);
};

export default Header;
