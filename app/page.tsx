import Button from '@/components/Button';

export default function Home() {
	return (
		<div
			className="flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-300 py-20 px-4"
			style={{ minHeight: 'calc(100vh - 180px)' }}
		>
			<div className="text-center">
				<h1 className="text-6xl font-bold text-white mb-4">
					くーちゃんだよ～！
				</h1>
				<p className="text-2xl text-white mb-8">
					あんじゅの初めてのNext.jsプロジェクト！
				</p>
				<div className="flex gap-4 justify-center">
					<Button href="/about" color="purple">
						Aboutページへ →
					</Button>
					<Button href="/about" color="pink">
						ピンクのボタン！
					</Button>
				</div>
			</div>
		</div>
	);
}
