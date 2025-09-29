import Link from 'next/link';

export default function About() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-green-300">
			<div className="text-center">
				<h1 className="text-6xl font-bold text-white mb-4">
					About Page だよ〜！
				</h1>
				<p className="text-2xl text-white mb-8">
					あんじゅはパン工場で働いてるよ🍞
				</p>
				<Link
					href="/"
					className="bg-white text-blue-500 px-6 py-3 rounded-full font-bold hover:bg-blue-100 inline-block"
				>
					トップに戻る
				</Link>
			</div>
		</div>
	);
}
