import Link from 'next/link';

interface ButtonProps {
	href: string;
	children: React.ReactNode;
	color?: 'purple' | 'blue' | 'pink';
}

export default function Button({
	href,
	children,
	color = 'purple',
}: ButtonProps) {
	const coloStyles = {
		purple: 'bg-white text-purple-500 hover:bg-purple-100',
		blue: 'bg-white text-blue-500 hover:bg-blue-100',
		pink: 'bg-white text-pink-500 hover:bg-pink-100',
	};

	return (
		<Link
			href={href}
			className={`${coloStyles[color]} px-6 py-3 rounded-full font-bold inline-block transition-all hover:scale-105`}
		>
			{children}
		</Link>
	);
}
