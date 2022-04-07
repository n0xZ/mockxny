import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';
import { CartContext } from '../context/CartContext';
import { useRouter } from 'next/router';
function MyApp({ Component, pageProps }: AppProps) {
	const { pathname } = useRouter();
	return (
		<CartContext>
			<AnimatePresence exitBeforeEnter key={pathname}>
				<Component {...pageProps} />
			</AnimatePresence>
			<Toaster position="bottom-right" reverseOrder={false} />
		</CartContext>
	);
}

export default MyApp;
