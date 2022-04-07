import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import cartIllustration from '@/public/cart-illustration.svg';
const EmptyCart = () => {
	return (
		<section className="container mx-auto flex flex-col items-center justify-center">
			<Image
				src={cartIllustration}
				alt="Sketchy image"
				width={600}
				height={600}
			/>
			<h2 className='text-3xl font-bold mb-2'>Su carrito está vacío</h2>
			<Link href="/products">
				<a className='text-xl '>Volver atrás</a>
			</Link>
		</section>
	);
};

export default EmptyCart;
