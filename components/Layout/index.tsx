import { motion } from 'framer-motion';
import { FC } from 'react';
import Header from './Header';

const Layout: FC = ({ children }) => {
	return (
		<div>
			<Header />
			<motion.section
				exit={{ opacity: 0 }}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
			>
				{children}
			</motion.section>
		</div>
	);
};

export default Layout;
