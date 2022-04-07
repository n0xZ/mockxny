import { ButtonHTMLAttributes, FC } from 'react';

const Button: FC<
	ButtonHTMLAttributes<HTMLButtonElement>
> = ({ className, children, ...rest }) => {
	return (
		<button
			className={`${className} border-2 font-lato text-base border-black rounded-md px-6 py-4 hover:border-gray-900 hover:bg-gray-200  duration-100 ease-in`}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
