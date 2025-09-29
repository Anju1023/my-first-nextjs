import Link from 'next/link';

export default function Home() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-300">
			<div className="text-center">
				<h1 className="text-6xl font-bold text-white mb-4">
					くーちゃんだよ～！
				</h1>
				<p className="text-2xl text-white mb-8">
					あんじゅの初めてのNext.jsプロジェクト！
				</p>
				<Link
					href="/about"
					className="bg-white text-purple-500 px-6 py-3 rounded-full font-bold hover:bg-purple-100 inline-block"
				>
					Aboutページへ →
				</Link>
			</div>
		</div>
	);
}
