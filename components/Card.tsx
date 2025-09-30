interface CardProps {
	title: string;
	description: string;
	emoji: string;
}

export default function Card({ title, description, emoji }: CardProps) {
	return (
		<div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:scale-105">
			<div className="text-6xl mb-4 text-center">{emoji}</div>
			<h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">
				{title}
			</h3>
			<p className="text-gray-600 text-center">{description}</p>
		</div>
	);
}
