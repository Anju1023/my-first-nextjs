import Link from 'next/link';

export default function Header() {
	return (
		<header className="bg-white shadow-md">
			<nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
				<Link
					href="/"
					className="text-2xl font-bold text-purple-500 hover:text-purple-600"
				>
					くーちゃん💜
				</Link>
				<div className="flex gap-6">
					<Link
						href="/"
						className="text-gray-600 hover:text-purple-500 font-medium transition-colors"
					>
						Home
					</Link>
					<Link
						href="/about"
						className="text-gray-600 hover:text-purple-500 font-medium transition-colors"
					>
						About
					</Link>
				</div>
			</nav>
		</header>
	);
}
