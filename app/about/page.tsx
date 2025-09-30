import Link from 'next/link';
import Card from '@/components/Card';

export default function About() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-400 to-green-300 py-20 px-4">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-6xl font-bold text-white mb-4 text-center">
					About Page だよ〜！
				</h1>
				<p className="text-2xl text-white mb-12 text-center">
					あんじゅのことを紹介するよ！
				</p>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
					<Card
						emoji="🍞"
						title="お仕事"
						description="パン工場で働いてるよ！毎日いい匂い〜"
					/>
					<Card
						emoji="💻"
						title="勉強中"
						description="PythonとJavaScriptを勉強してるよ！"
					/>
					<Card
						emoji="✨"
						title="今日の成果"
						description="Next.jsでコンポーネント作れるようになった！"
					/>
				</div>

				<div className="text-center">
					<Link
						href="/"
						className="bg-white text-blue-500 px-6 py-3 rounded-full font-bold hover:bg-blue-100 inline-block"
					>
						トップに戻る
					</Link>
				</div>
			</div>
		</div>
	);
}
